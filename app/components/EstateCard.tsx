import prisma from "@/prisma/client";
import { estateCardElement } from "@/public/estateCardElements";
import { Text, Grid, Card, Table } from "@radix-ui/themes";
import image from "@/public/assests/Images/house.jpg";
import Image from "next/image";
import { Decimal } from "@prisma/client/runtime/library";
interface ImageModel {
  id: number;
  url: string;
}
interface Props {
  data: {
    id: number;
    estateType: string;
    location: string;
    dierction: string;
    isAvailable: string;
    price: Decimal;
    space: number;
    apartmentStatus?: string;
    floor?: string;
    services?: string;
    video?: string | null;
    description?: string;
  };
}
const EsatateCards =  ({ data }: Props) => {
  return (
    <Card key={data.id}>
      <Image alt={data.dierction} src={image} />

      <Table.Root layout="fixed" size="3" className=" font-thin">
        <Table.Row align="center" className="text-lg">
          <Table.Cell justify="center"> {data.estateType}</Table.Cell>
          <Table.Cell justify="center">
            {estateCardElement.estateType}
          </Table.Cell>
        </Table.Row>
        <Table.Row className="text-lg">
          <Table.Cell justify="center"> {data.location}</Table.Cell>
          <Table.Cell justify="center">{estateCardElement.location}</Table.Cell>
        </Table.Row>
        {data.floor && (
          <Table.Row className="text-lg">
            <Table.Cell justify="center"> {data.floor}</Table.Cell>
            <Table.Cell justify="center">{estateCardElement.floor}</Table.Cell>
          </Table.Row>
        )}
        {data.services && (
          <Table.Row className="text-lg">
            <Table.Cell justify="center"> {data.services}</Table.Cell>
            <Table.Cell justify="center">
              {estateCardElement.services}
            </Table.Cell>
          </Table.Row>
        )}
        {data.description && (
          <Table.Row className="text-lg">
            <Table.Cell justify="center"> {data.description}</Table.Cell>
            <Table.Cell justify="center">
              {estateCardElement.description}
            </Table.Cell>
          </Table.Row>
        )}
        <Table.Row className="text-lg">
          <Table.Cell justify="center"> {data.price.toFixed()} S.P</Table.Cell>
          <Table.Cell justify="center">{estateCardElement.price}</Table.Cell>
        </Table.Row>
      </Table.Root>
    </Card>
  );
};

export default EsatateCards;
