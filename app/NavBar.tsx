"use client";
import { Box, Button, Flex, TabNav } from "@radix-ui/themes";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Style from "./navLink.module.css";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { signIn } from "next-auth/react";
import { RiEditLine } from "react-icons/ri";

const NavBar = () => {
  const currentPathName = usePathname();
  const links = [
    { linkLabel: "عالمفتاح", href: "/" },
    { linkLabel: "بناء جديد", href: "/newEstate" },
    { linkLabel: "بناء مجدد", href: "/oldEstate" },
    { linkLabel: "محلات تجارية", href: "/commercialEstate" },
    { linkLabel: "مزارع", href: "/touristEstate" },
    { linkLabel: "أراضي زراعية", href: "/agriculturalEstate" },
    { linkLabel: "تعهدات وإكساء", href: "/pledge" },
  ];
  console.log(currentPathName);
  return (
    <>
    
      <nav
        className={
          "flex flex-row-reverse text-center justify-items-stretch justify-evenly p-5  "
        }
      >
        {links.map((link) => (
          <Link
            key={link.linkLabel}
            className={classNames({
              "hover:border-red-500 p-3 border-b-2 text-gray-600 ": true,
              "border-red-500 text-red-600 font-medium ": currentPathName === link.href,
            })}
            href={link.href}
          >
            {link.linkLabel}
          </Link>
        ))}
          <Button
        onClick={() => signIn()}
        className=" rounded-full justify-items-center   w-4 h-4 "
      >
        
        <RiEditLine className="w-4 h-4  " fontSize="5" />
      </Button>

      </nav>
    </>

  );
};

export default NavBar;
