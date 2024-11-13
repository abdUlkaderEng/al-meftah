import { Box, Grid } from "@radix-ui/themes";
import { useState } from "react";
import EsatateCards from "../components/EstateCard";
import Filters from "../components/Filters";
import "./fetchNewEstateData";
import prisma from "@/prisma/client";
const NewEstatesPage = async () => {
  
    const data = await prisma.apartment.findMany({
        where: { apartmentStatus: "NEW_BUILD" },
    })
  const setFilter =()=> console.log("object")
  return (
    <Box p="5">
      <Filters   />
    <Grid columns={{ initial: "1",sm:"2", md: "3" }}  pt="2" gap="5">
      {data.map((d) => (
        <EsatateCards key={d.id} data={d} />
      ))}
      </Grid>
      {/* <Text>{filter }</Text> */}
      </Box>
  );
};

export default NewEstatesPage;
