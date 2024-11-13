"use client";
import React from "react";
import Styles from "./Filters.module.css";

import {
  Flex,
  DropdownMenu,
  Button,
  ChevronDownIcon,
  Box,
} from "@radix-ui/themes";
import { ArrowDownIcon, DropdownMenuIcon } from "@radix-ui/react-icons";
import { filters } from "@/public/filters";


const Filters = () => {
  return (
    <Flex gap="2" justify="end" align="center" className="mt-8">
      {filters.map((filter) => (
        <DropdownMenu.Root key={filter.filterType}>
            <DropdownMenu.Trigger className={Styles.trigger}>
              <Button variant="surface">
                <ChevronDownIcon />
                {filter.filterType}
              </Button>
            </DropdownMenu.Trigger>
          <DropdownMenu.Content variant="soft">
            {filter.items.map((item, index) => (
              <Box key={index}>
                <DropdownMenu.Item className={Styles.item} onClick={() => (item)}>
                  {item}
                </DropdownMenu.Item>
                <DropdownMenu.Separator />
              </Box>
            ))}
           
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      ))}
    </Flex>
  );
};

export default Filters;
