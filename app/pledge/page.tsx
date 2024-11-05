import prisma from "@/prisma/client";
import { Grid } from "@radix-ui/themes";
import React from "react";
import EsatateCards from "../components/EstateCard";

const Pledge = async () => {
  const data = await prisma.pledge.findMany();
  return <div>Pledg</div>;
};

export default Pledge;
