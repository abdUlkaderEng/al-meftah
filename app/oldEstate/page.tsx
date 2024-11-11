import prisma from "@/prisma/client";
import { Box, Grid } from "@radix-ui/themes";
import EsatateCards from "../components/EstateCard";
import Filters from "../components/Filters";

const OldEstatePage = async () => {
  const data = await prisma.apartment.findMany({
    where: { apartmentStatus: "OLD_BUILD" },
  });
  return (
    <Box p="5">
      <Filters />
      <Grid columns={{ initial: "1",sm:"2", md: "3" }} pt="2" gap="5">
        {data.map((d) => (
          <EsatateCards key={d.id} data={d} />
        ))}
      </Grid>
    </Box>
  );
};

export default OldEstatePage;
