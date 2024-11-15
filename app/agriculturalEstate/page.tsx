"use client";
import { AgriculturalEstate as AgriculturalEstateInterface } from "@prisma/client";
import { Grid } from "@radix-ui/themes";
import EsatateCards from "../components/EstateCard/EstateCard";
import useEstate from "../hooks/useEstate";
import CardsLoadingPage from "../pages/CardsLoadingPage";

const AgriculturalEstate = () => {
  const { data, loading } =
    useEstate<AgriculturalEstateInterface>("agriculturalEstate");
  return (
    <Grid columns={{ initial: "1", sm: "2", md: "3" }} p="5" gap="5">
      {loading ? <CardsLoadingPage /> : <></>}

      {data.map((d) => (
        <EsatateCards key={d.id} data={d} />
      ))}
    </Grid>
  );
};

export default AgriculturalEstate;
