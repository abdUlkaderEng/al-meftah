import prisma from "@/prisma/client";
import { Grid } from "@radix-ui/themes";
import React from "react";
import EsatateCards from "../components/EstateCard";

const AgriculturalEstate = async () => {
  const data = await prisma.agriculturalEstate.findMany();
  return (
    <Grid columns="3" p="5" gap="5">
      {data.map((d) => (
        <EsatateCards key={d.id} data={d} />
      ))}
    </Grid>
  );
};

export default AgriculturalEstate;
