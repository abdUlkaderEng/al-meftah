import prisma from '@/prisma/client'
import { estateCardElement } from '@/public/estateCardElements'
import { Text, Grid, Card } from '@radix-ui/themes'
import image from '@/public/assests/Images/house.jpg'
import  Image  from 'next/image'
import { PrismaClient } from '@prisma/client'

interface Props{
   data : {
    id: number;
    estateType: string;
    location: string;
    dierction: string;
    floor: string;
    services: string;
    apartmentStatus: string;
    isAvailable: string;
   
    space: number;
}[] 
}
const EsatateCards = async ({} : Props) => {

   const modelName =  new PrismaClient()
      const   data = await prisma.apartment.findMany({
            where: { apartmentStatus: "NEW_BUILD" },
      });
    
    return (
    <Grid p="5" columns="3" gap="5">
      {data.map((d) => (
        <Card key={d.id}>
          <Image alt={d.estateType} src={image} />
          <Grid p="3" className="text-right  " columns="2">
            <Grid gap="2" className="font-thin text-lg">
              <Text className="border-dotted  border-b-2   p-1">
                {d.estateType}
              </Text>
              <Text className="border-dotted border-b-2  p-1 ">
                {d.location}
              </Text>
              <Text className="border-dotted border-b-2  p-1 ">
                {d.dierction}
              </Text>
              <Text className="border-dotted border-b-2  p-1 ">{d.floor}</Text>
              <Text className="border-dotted border-b-2  p-1 ">{d.space}</Text>
              <Text className="border-dotted border-b-2  p-1 ">
                {d.services}
              </Text>
              <Text className="border-dotted border-b-2  p-1 ">{d.floor}</Text>
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
      ))}
    </Grid>
  )
}

export default EsatateCards