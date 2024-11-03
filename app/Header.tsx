import { Box, Flex, Grid, Heading, Section } from "@radix-ui/themes";
import React from "react";

const Header = () => {
  return (
    <Section className="bgHeader  rounded-lg m-5 justify-self-center  " height="75vh" width="90vw"  >
      <Grid
      height="100%"
      
        
        align="center"
        columns="2"
        className=" text-gray-100 p-10 "
      >
        <Box width="75%" height="100%" className="bg-slate-50  "></Box>
        <Grid
          rows="2"
          justify="center"
          align="center"
          height={"75%"}
          className=""
        >
          <Heading size="9" className="">
            استلم بيتك عالمفتاح
          </Heading>
          <Heading as="h4" weight="light" className="">
            مسؤولون عن ثبوتيات وأوراق المنشأة ومصداقية البائع والشاري
          </Heading>
        </Grid>
      </Grid>
    </Section>
  );
};

export default Header;
