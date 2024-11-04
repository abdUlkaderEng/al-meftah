import prisma from "@/prisma/client";
import React from "react";
import SectionsContainer from "../SectionsContainer";
import EsatateCards from "../components/EsatateCards";
import { Grid } from "@radix-ui/themes";

const OldEstatePage = async () => {
  const data = await prisma.apartment.findMany({
    where: { apartmentStatus: "OLD_BUILD" },
  });
    return data.map(d => <EsatateCards key={d.id}  data={d} /> );
};

export default OldEstatePage;
