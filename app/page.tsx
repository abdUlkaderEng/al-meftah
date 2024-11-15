import Image from "next/image";
import NavBar from "./NavBar";
import Header from "./Header";
import SectionsContainer from "./SectionsContainer";
import { Button } from "@radix-ui/themes";
import { Pencil1Icon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <>
      <Header />
      <SectionsContainer />
    </>
  );
}
