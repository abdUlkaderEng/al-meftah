import prisma from "@/prisma/client";
import { Box, Card, Flex, Avatar, Text, Heading, Grid } from "@radix-ui/themes";
import React from "react";
import image from "@/public/assests/Images/house.jpg";
import Image from "next/image";
import { estateCardElement } from "@/public/estateCardElements";

const NewEstatesPage = async () => {
  const data = await prisma.apartment.findMany({
    where: { apartmentStatus: "NEW_BUILD" },
  });
  return (
    
      <Grid columns="2" >
      {data.map((d) => (
          <Card key={d.id}>
            <Image alt={d.estateType} src={image} />
            <Grid areas="aside main" columns="2">
              <Grid><Text></Text></Grid>
              <Grid>.....</Grid>
            </Grid>
          </Card>
      ))}
      </Grid>
    
  );
};

export default NewEstatesPage;
