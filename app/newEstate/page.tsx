import prisma from "@/prisma/client";
import { Box, Card, Flex, Avatar, Text, Heading, Grid } from "@radix-ui/themes";
import React from "react";
import image from "@/public/assests/Images/house.jpg";
import Image from "next/image";
import { estateCardElement } from "@/public/estateCardElements";
import EsatateCards from "../components/EsatateCards";

const NewEstatesPage = async () => {
  const data = await prisma.apartment.findMany({
    where: { apartmentStatus: "NEW_BUILD"}
    
  })
  
  
  
  return (
    
    // data.map( d => <EsatateCards key={d.id} data={d} /> )
    
    <Grid p="5" columns="3" gap="5">
      {data.map((d) => (
        <Card key={d.id}>
          <Image alt={d.estateType} src={image} />
          <Grid p="3" className="text-right  " columns="2">
            <Grid gap="2" className="font-thin text-lg">
              <Text className="border-dotted  border-b-2   p-1">
                { d.estateType}
              </Text>
              <Text className="border-dotted border-b-2  p-1 ">
                {d.location}
              </Text>
              <Text className="border-dotted border-b-2  p-1 ">
                {d.dierction}
              </Text>
              <Text className="border-dotted border-b-2  p-1 ">{d.floor}</Text>
              <Text className="border-dotted border-b-2  p-1 ">{d.space}</Text>
              <Text className="border-dotted border-b-2  p-1 ">
                {d.services}
              </Text>
              <Text className="border-dotted border-b-2  p-1 ">{d.floor}</Text>
            </Grid>
            <Grid gap="2" className=" font-thin text-lg">
              <Text className="border-dotted border-b-2  p-1 ">
                {estateCardElement.estateType}
              </Text>
              <Text className="border-dotted border-b-2  p-1 ">
                {estateCardElement.location}
              </Text>
              <Text className="border-dotted border-b-2  p-1 ">
                {estateCardElement.dierction}
              </Text>
              <Text className="border-dotted border-b-2  p-1 ">
                {estateCardElement.floor}
              </Text>
              <Text className="border-dotted border-b-2  p-1 ">
                {estateCardElement.space}
              </Text>
              <Text className="border-dotted border-b-2  p-1 ">
                {estateCardElement.services}
              </Text>
              <Text className="border-dotted border-b-2  p-1 ">
                {estateCardElement.price}
              </Text>
            </Grid>
          </Grid>
        </Card>
      ))}
    </Grid>
  );
};

export default NewEstatesPage;
