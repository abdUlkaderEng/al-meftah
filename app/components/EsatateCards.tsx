import prisma from "@/prisma/client";
import { estateCardElement } from "@/public/estateCardElements";
import { Text, Grid, Card } from "@radix-ui/themes";
import image from "@/public/assests/Images/house.jpg";
import Image from "next/image";
import { Decimal } from "@prisma/client/runtime/library";
interface ImageModel{
  id: number,
  url: string
}
interface Props {
  data: {
    id: number;
    estateType: string;
    location: string;
    dierction: string;
    floor: string;
    services: string;
    apartmentStatus: string;
    isAvailable: string;
    price: Decimal;
    space: number;
    video: string | null;
    
  };
}
const EsatateCards = async ({ data }: Props) => {
  return (
    <Grid p="5" columns="3" gap="5">
      <Card key={data.id}>
        <Image alt={data.dierction} src={image} />
        <Grid p="3" className="text-right  " columns="2">
          <Grid gap="2" className="font-thin text-lg">
            <Text className="border-dotted  border-b-2   p-1">
              {data.estateType}
            </Text>
            <Text className="border-dotted border-b-2  p-1 ">
              {data.location}
            </Text>
            <Text className="border-dotted border-b-2  p-1 ">
              {data.dierction}
            </Text>
            <Text className="border-dotted border-b-2  p-1 ">{data.floor}</Text>
            <Text className="border-dotted border-b-2  p-1 ">{data.space}</Text>
            <Text className="border-dotted border-b-2  p-1 ">
              {data.services}
            </Text>
            <Text className="border-dotted border-b-2  p-1 ">
              {data.price.toFixed()}ل.س
            </Text>
          </Grid>
          <Grid gap="2" className=" font-thin text-lg">
            <Text className="border-dotted border-b-2  p-1 ">
              {estateCardElement.estateType}
            </Text>
            <Text className="border-dotted border-b-2  p-1 ">
              {estateCardElement.location}
            </Text>
            <Text className="border-dotted border-b-2  p-1 ">
              {estateCardElement.dierction}
            </Text>
            <Text className="border-dotted border-b-2  p-1 ">
              {estateCardElement.floor}
            </Text>
            <Text className="border-dotted border-b-2  p-1 ">
              {estateCardElement.space}
            </Text>
            <Text className="border-dotted border-b-2  p-1 ">
              {estateCardElement.services}
            </Text>
            <Text className="border-dotted border-b-2  p-1 ">
              {estateCardElement.price}
            </Text>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default EsatateCards;
