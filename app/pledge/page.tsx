"use client"
import image from "@/public/assests/Images/house.jpg";
import { Pledge as PledgeInterface } from "@prisma/client";
import { Box, Card, Grid, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import Style from "../components/EstateCard.module.css";
import useEstate from "../hooks/useEstate";
import PledgeCardLoading from "../pages/PledgeCardLoading";
const Pledge =  () => {
  const {data ,loading} = useEstate<PledgeInterface>("pledge")
  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5" p="5">
      {loading ? <PledgeCardLoading /> : <></>}
      {data.map((d) => (
        <Card key={d.id} className={Style.cardHover}>
          <Grid gap="1" className="text-right" columns="2">
            <Box className="border-r-2 pr-1 m-0">
              <Heading className="text-center" m="2" >بعد</Heading>
              <Image src={image} alt="" />
              <Text m="2" as="p">شرح </Text>
              <Text>{d.descriptionAfter}</Text>
            </Box>
            <Box>
              <Heading className="text-center" m="2">قبل</Heading>
              <Image src={image} alt="" />
              <Text m="2" as="p">شرح </Text>
              <Text>{d.descriptionBefor}</Text>
            </Box>
          </Grid>
          
        </Card>
      ))}
    </Grid>
  );
};

export default Pledge;
