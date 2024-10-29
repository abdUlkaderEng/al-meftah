import Image from "next/image";
import NavBar from "./NavBar";
import Header from "./Header";
import SectionsContainer from "./SectionsContainer";
import { Button } from "@radix-ui/themes";

export default function Home() {
  return (
    <>
      <Header />
      <SectionsContainer />
      <Button m="3">وضع المسؤول</Button>
    </>
  );
}
