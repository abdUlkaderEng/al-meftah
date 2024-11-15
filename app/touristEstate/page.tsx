"use client";

import { TouristEstate as TouristEstateInterface } from "@prisma/client";
import { Grid } from "@radix-ui/themes";
import EsatateCards from "../components/EstateCard";
import useEstate from "../hooks/useEstate";
import CardsLoadingPage from "../pages/CardsLoadingPage";

const TouristEstate = () => {
  const { data, loading } = useEstate<TouristEstateInterface>("touristEstate");
  return (
    <Grid columns={{ initial: "1", sm: "2", md: "3" }} p="5" gap="5">
      {loading ? <CardsLoadingPage /> : <></>}

      {data.map((d) => (
        <EsatateCards key={d.id} data={d} />
      ))}
    </Grid>
  );
};

export default TouristEstate;
