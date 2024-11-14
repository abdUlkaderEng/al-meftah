import { sectionsEstate } from "@/public/sectionsEstate";
import { Grid, Heading, Card, Text } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";
import image from "@/public/assests/Images/house.jpg";
import Link from "next/link";
import Style from "./components/EstateCard.module.css"

const SectionsContainer = () => {
  return (
    <Grid gap="3" columns={{ initial: "1",sm:"2", md: "3" }} className="m-5 ">
      {sectionsEstate.map((s) => (
        <Link key={s.title} href={"/" + s.endPoint}>
          <Card size="1" className={"flex flex-col justify-items-center space-y-2"}>
            <Image
              src={s.image}
              alt={s.title}
              width={600}
              height={500}
              className="rounded-md pb-3"
            />
            <Heading as="h3" className="pb-1">
              {s.title}
            </Heading>
            <Text as="p" className="text-center">
              {s.description}
            </Text>
          </Card>
        </Link>
      ))}
    </Grid>
  );
};

export default SectionsContainer;
 