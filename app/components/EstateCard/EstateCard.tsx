import SoldStamp from "@/public/assests/Images/SoldStamp.png";
import { estateCardElement } from "@/public/estateCardElements";
import { Decimal } from "@prisma/client/runtime/library";
import { Card, Flex, Table } from "@radix-ui/themes";
import Image from "next/image";
import ImagesSlideShow from "../ImagesSlideShow";
import Style from "./EstateCard.module.css";

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
const EsatateCards = ({ data }: Props) => {
  return (
    <Card
      key={data.id}
      className={
        data.isAvailable !== "SOLD"
          ? Style.cardHover
          : "cursor-no-drop  hover:bg-gray-300  transition"
      }
    >
      <Flex justify="center" align="center" className="relative">
        {data.isAvailable === "SOLD" ? (
          <Image className="absolute z-10" src={SoldStamp} alt="Sold" />
        ) : (
          <></>
        )}
        <ImagesSlideShow />
      </Flex>
      <Table.Root layout="fixed" size="3" className=" font-thin">
        <Table.Body>
          <Table.Row align="center" className="text-lg">
            <Table.Cell justify="center"> {data.estateType}</Table.Cell>
            <Table.Cell justify="center" className=" font-medium">
              {estateCardElement.estateType}
            </Table.Cell>
          </Table.Row>
          <Table.Row className="text-lg">
            <Table.Cell justify="center"> {data.location}</Table.Cell>
            <Table.Cell justify="center" className=" font-medium">
              {estateCardElement.location}
            </Table.Cell>
          </Table.Row>
          {data.floor && (
            <Table.Row className="text-lg">
              <Table.Cell justify="center"> {data.floor}</Table.Cell>
              <Table.Cell justify="center" className=" font-medium">
                {estateCardElement.floor}
              </Table.Cell>
            </Table.Row>
          )}
          {data.services && (
            <Table.Row className="text-lg">
              <Table.Cell justify="center"> {data.services}</Table.Cell>
              <Table.Cell justify="center" className=" font-medium">
                {estateCardElement.services}
              </Table.Cell>
            </Table.Row>
          )}
          {data.description && (
            <Table.Row className="text-lg">
              <Table.Cell justify="center"> {data.description}</Table.Cell>
              <Table.Cell justify="center" className=" font-medium">
                {estateCardElement.description}
              </Table.Cell>
            </Table.Row>
          )}
          <Table.Row className="text-lg">
            <Table.Cell justify="center"> S.P</Table.Cell>
            <Table.Cell justify="center" className=" font-medium">
              {estateCardElement.price}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </Card>
  );
};

export default EsatateCards;
