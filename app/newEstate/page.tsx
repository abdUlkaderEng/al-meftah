"use client";
import { Apartment } from "@prisma/client";
import { Box, Grid } from "@radix-ui/themes";
import EsatateCards from "../components/EstateCard/EstateCard";
import Filters from "../components/Filters/Filters";
import useEstate from "../hooks/useEstate";
import CardsLoadingPage from "../pages/CardsLoadingPage";
import { useState } from "react";
import { FilterTypes } from "@/public/filters";
const NewEstatesPage = () => {
  const { data, loading } = useEstate<Apartment>("newEstate");
  const [selectedSpace, setSelectedSpace] = useState<FilterTypes[]>([{
    filterBy: "الكل",
    filterItem: "الكل",
  }]);
  console.log(selectedSpace);
  return (
    <Box p="5">
      <Filters  />
      <Grid columns={{ initial: "1", sm: "2", md: "3" }} pt="2" gap="5">
        {loading ? <CardsLoadingPage /> : <></>}
        {selectedSpace?.map(selectedFilter => selectedFilter.filterItem === "الكل"
          ? data.map((d) => <EsatateCards key={d.id} data={d} />)
          : data
              .filter((item) => console.log("filterd"))
              .map((filterdItem) => (
                <EsatateCards key={filterdItem.id} data={filterdItem} />
              ))) }
      </Grid>
      {/* <Text>{filter }</Text> */}
    </Box>
  );
};

export default NewEstatesPage;
