"use client";
import { Box, Button, Flex, TabNav } from "@radix-ui/themes";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Style from "./navLink.module.css";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { signIn, signOut, useSession } from "next-auth/react";
import { PiSignInLight, PiSignOutLight } from "react-icons/pi";

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
  const { status } = useSession();
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
              "border-red-500 text-red-600 font-medium ":
                currentPathName === link.href,
            })}
            href={link.href}
          >
            {link.linkLabel}
          </Link>
        ))}

        {status === "authenticated" ? (
          <Link
            className=" rounded-full justify-items-center   w-4 h-4 "
            href="/api/auth/signout"
          >
            <PiSignOutLight className="w-6 h-6  " fontSize="5" />
          </Link>
        ) : (
          <Link
            className=" rounded-full justify-items-center   w-4 h-4 "
            href="/api/auth/signin"
          >
            <PiSignInLight className="w-6 h-6  " fontSize="5" />
          </Link>
        )}
      </nav>
    </>
  );
};

export default NavBar;
