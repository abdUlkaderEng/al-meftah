import { Box, TabNav } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <TabNav.Root  className="flex flex-row-reverse  items-center text-right">
      <Link className="m-5" href={"/"}>
        عالمفتاح
      </Link>
    </TabNav.Root>
  );
};

export default NavBar;
