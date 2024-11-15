"use client";
import { CommercialEstate as commercialEstate } from "@prisma/client";
import { Box, Grid } from "@radix-ui/themes";
import EsatateCards from "../components/EstateCard/EstateCard";
import Filters from "../components/Filters/Filters";
import useEstate from "../hooks/useEstate";
import CardsLoadingPage from "../pages/CardsLoadingPage";

const CommercialEstate = () => {
  const { data, loading } = useEstate<commercialEstate>("commercialEstate");
  return (
    <Box p="5">
      <Filters />
      <Grid columns={{ initial: "1", sm: "2", md: "3" }} pt="2" gap="5">
        {loading ? <CardsLoadingPage /> : <></>}

        {data.map((d) => (
          <EsatateCards key={d.id} data={d} />
        ))}
      </Grid>
    </Box>
  );
};

export default CommercialEstate;
