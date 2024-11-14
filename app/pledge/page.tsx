import prisma from "@/prisma/client";
import { Box, Card, Grid, Heading, Table, Text } from "@radix-ui/themes";
import React from "react";
import EsatateCards from "../components/EstateCard";
import Image from "next/image";
import image from "@/public/assests/Images/house.jpg"
import Style from "../components/EstateCard.module.css"
const Pledge = async () => {
  const data = await prisma.pledge.findMany();
  return (
    <Grid  columns={{ initial: "1", md: "2" }} gap="5" p="5">
      {data.map((d) => (
        <Card key={d.id} className={Style.cardHover}>
          <Grid gap="1" className="text-right" columns="2">
            <Box className="border-r-2 pr-1 m-0">
              <Heading className="text-center" m="2" >بعد</Heading>
              <Image src={image} alt="" />
              <Text m="2" as="p">شرح </Text>
              <Text>{d.descriptionAfter}</Text>
            </Box>
            <Box>
              <Heading className="text-center" m="2">قبل</Heading>
              <Image src={image} alt="" />
              <Text m="2" as="p">شرح </Text>
              <Text>{d.descriptionBefor}</Text>
            </Box>
          </Grid>
          
        </Card>
      ))}
    </Grid>
  );
};

export default Pledge;
