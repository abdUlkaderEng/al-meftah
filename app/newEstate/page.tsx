import prisma from "@/prisma/client";
import { Grid } from "@radix-ui/themes";
import EsatateCards from "../components/EstateCard";

const NewEstatesPage = async () => {
  const data = await prisma.apartment.findMany({
    where: { apartmentStatus: "NEW_BUILD" },
  });

  return (
    <Grid columns="3" p="5" gap="5">
      {data.map((d) => (
        <EsatateCards key={d.id} data={d} />
      ))}
    </Grid>
  );
};

export default NewEstatesPage;
