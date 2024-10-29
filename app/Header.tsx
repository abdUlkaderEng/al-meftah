import { Box, Flex, Grid, Heading, } from "@radix-ui/themes";
import React from "react";

const Header = () => {
  return (
    <Grid align="center" columns="2" gap="5" width="100vw" height="90vh" className="bg-sky-950 text-gray-300 p-10">
      
     <Box width="75%" height="75%" className="bg-slate-50  "></Box>
        <Grid rows="2" justify="center" align="center"     height={"75%"} className="">
          <Heading size="9"  className="">استلم بيتك عالمفتاح</Heading>
          <Heading as="h4" className="">مسؤولون عن ثبوتيات وأوراق المنشأة ومصداقية البائع والشاري</Heading >
        </Grid>

    </Grid>
  );
};

export default Header;
