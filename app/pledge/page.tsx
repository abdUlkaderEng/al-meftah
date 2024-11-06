import prisma from "@/prisma/client";
import { Box, Card, Grid, Heading, Table, Text } from "@radix-ui/themes";
import React from "react";
import EsatateCards from "../components/EstateCard";
import Image from "next/image";
import image from "@/public/assests/Images/house.jpg"

const Pledge = async () => {
  const data = await prisma.pledge.findMany();
  return (
    <Grid  columns="2" gap="5" m="5">
      {data.map((d) => (
        <Card key={d.id}>
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
          {/* <Table.Root className="size-5/6">
            <Table.ColumnHeaderCell className="m-4 text-right">
              <Table.Row className="text-center" ><Heading>بعد</Heading></Table.Row>
              <Table.Row><Image className="" src={image} alt={d.descriptionAfter}></Image></Table.Row>
              <Table.Row className="m-2">شرح العقار قبل </Table.Row>
              <Table.Row>{d.descriptionAfter }</Table.Row>
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="text-right">
              <Table.RowHeaderCell className="text-center"><Heading>قبل</Heading></Table.RowHeaderCell>
              <Table.Row><Image src={image} alt={d.descriptionAfter}></Image></Table.Row>
              <Table.Row>{d.descriptionBefor }</Table.Row>
            </Table.ColumnHeaderCell>
          </Table.Root> */}
        </Card>
      ))}
    </Grid>
  );
};

export default Pledge;
