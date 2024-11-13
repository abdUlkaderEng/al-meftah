import { Box, Flex, Grid, Heading, Section, Text } from "@radix-ui/themes";
import React from "react";

const Header = () => {
  return (
    <Section
      className="bgHeader  rounded-lg  justify-self-center  "
      height="64vh"
      width="95vw"
    >
      <Grid
        height="100%"
        align="center"
        columns="2"
        className=" text-gray-100 p-10 "
      >
        <Box width="80%" height="100%" className="bg-slate-50  "></Box>
        <Grid
          rows="2"
          justify="center"
          align="center"
          height={"75%"}
          className=""
        >
          <Text className="text-7xl">استلم عالمفتاح</Text>
          <Heading as="h4" weight="light" className="text-9xl">
            مسؤولون عن ثبوتيات وأوراق المنشأة ومصداقية البائع والشاري
          </Heading>
        </Grid>
      </Grid>
    </Section>
  );
};

export default Header;
