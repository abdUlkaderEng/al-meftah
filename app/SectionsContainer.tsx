import { sectionsEstate } from "@/public/sectionsEstate";
import { Grid, Heading ,Card,Text } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";
import image from '@/public/assests/Images/house.jpg'
import Link from "next/link";

const SectionsContainer = () => {
    return (
     
    <Grid gap="3"  columns="3" className="p-5 " >
            {sectionsEstate.map((s) => (
           <Link key={s.title} href={"/"+s.endPoint}>
        <Card     className="flex flex-col justify-items-center space-y-2" >
          <Image   src={s.image} alt={s.title} width={400} height={400}  className="border-4 "/>
          <Heading  as="h3" className="text-right">{s.title}</Heading>
          <Text as="p"  className="text-right">{s.description}</Text>
        </Card>
                  </Link>
      ))}
            </Grid>
          
  );
};

export default SectionsContainer;
