import { Box, TabNav } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <Box
      
      width="100vw"
      height="10vh"
      className="flex flex-row-reverse  items-center text-right bg-sky-950 text-cyan-50"
    >
      <Link className="m-5" href={"/"}>
        عالمفتاح
      </Link>
    </Box>
  );
};

export default NavBar;
