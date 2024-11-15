
import { Box, Card, Grid } from "@radix-ui/themes";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PledgeCardLoading = () => {
  const skeleton = [1, 2, 3, 4];
  return (
    <SkeletonTheme direction="rtl" baseColor="#eef0be" highlightColor="#ede9a9">
      {skeleton.map((d) => (
        <Card key={d}>
          <Grid gap="1" className="text-right m-2" columns="2">
            <Box className=" m-1">
              <Skeleton height={200} />
              <Skeleton count={5} className="mt-2" />
            </Box>
            <Box className="m-1">
              <Skeleton height={200} />
              <Skeleton count={5} className="mt-2"   />
            </Box>
          </Grid>
        </Card>
      ))}
    </SkeletonTheme>
  );
};

export default PledgeCardLoading;
