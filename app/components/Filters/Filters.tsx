"use client";
import { Pencil1Icon } from "@radix-ui/react-icons";
import Styles from "./Filters.module.css";
import { filters, FilterTypes } from "@/public/filters";
import {
  Box,
  Button,
  ChevronDownIcon,
  DropdownMenu,
  Flex,
} from "@radix-ui/themes";
import Link from "next/link";
import { useState } from "react";
import { RiEditLine } from "react-icons/ri";

interface Props {
  setFilter: (filterObject: FilterTypes[]) => void;
  filtersArray: FilterTypes[];
}
const Filters = () => {
  let selectedFilterType = "";
  return (
    <Flex justify="between" align="center" className="mt-8 pb-2">
      <Link
        className=" rounded-full justify-items-center   w-7 h-7 pl-8"
        href={"/validation"}
      >
      <RiEditLine className="w-7 h-7  " fontSize="5" />  
      </Link>

      <Box>
        {filters.map((filterComponent) => (
          <Box
            display="inline"
            className="pl-4 "
            key={filterComponent.filterType}
          >
            <DropdownMenu.Root>
              <DropdownMenu.Trigger className={Styles.trigger}>
                <Button
                  variant="surface"
                  onClick={() =>
                    (selectedFilterType = filterComponent.filterType)
                  }
                >
                  <ChevronDownIcon />
                  {filterComponent.filterType}
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content variant="soft">
                {filterComponent.filterItems.map((item, index) => (
                  <Box key={index}>
                    <DropdownMenu.Item
                      className={Styles.item}
                      
                      onClick={() => {}}
                    >
                      {item}
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator />
                  </Box>
                ))}
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </Box>
        ))}
      </Box>
    </Flex>
  );
};

export default Filters;
