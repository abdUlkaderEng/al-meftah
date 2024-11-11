import prisma from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import EsatateCards from "../components/EstateCard";
import Filters from "../components/Filters";

const NewEstatesPage = async () => {
  const data = await prisma.apartment.findMany({
    where: { apartmentStatus: "NEW_BUILD" },
  });

  return (
    <Box p="5">
      <Filters />
    <Grid columns="3"  pt="2" gap="5">
      {data.map((d) => (
        <EsatateCards key={d.id} data={d} />
      ))}
      </Grid>
      </Box>
  );
};

export default NewEstatesPage;
