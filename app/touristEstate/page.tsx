import prisma from "@/prisma/client";
import { Grid } from "@radix-ui/themes";
import React from "react";
import EsatateCards from "../components/EstateCard";

const TouristEstate = async () => {
  const data = await prisma.touristEstate.findMany();
  return (
    <Grid columns={{ initial: "1",sm:"2", md: "3" }} p="5" gap="5">
      {data.map((d) => (
        <EsatateCards key={d.id} data={d} />
      ))}
    </Grid>
  );
};

export default TouristEstate;
