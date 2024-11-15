"use client";
import { Pencil1Icon } from "@radix-ui/react-icons";
import Styles from "./Filters.module.css";
import { filters } from "@/public/filters";
import {
  Box,
  Button,
  ChevronDownIcon,
  DropdownMenu,
  Flex,
} from "@radix-ui/themes";
import Link from "next/link";
import { useState } from "react";

interface Props{
  filter :string
}
const Filters = ({filter} :Props) => {
  const [filteredBy,setFilter] = useState<String>("")

  return (
        
              <Flex  justify="between" align="center" className="mt-8 pb-2">
          <Link className=" rounded-full justify-items-center   w-7 h-7 pl-8" href={"/validation"} ><Pencil1Icon className="w-7 h-7  "  fontSize="5" /></Link>
          
                <Box>
                  {filters.map((filter) => (
                            <Box display="inline" className="pl-4" key={filter.filterType}>
                              <DropdownMenu.Root  >
                                <DropdownMenu.Trigger className={Styles.trigger}>
                                  <Button variant="surface">
                                                <ChevronDownIcon />
                                                {filter.filterType}
                                  </Button>
                                </DropdownMenu.Trigger>
                                <DropdownMenu.Content variant="soft">
                                  {filter.items.map((item, index) => (
                                                <Box key={index}>
                                                  <DropdownMenu.Item  className={Styles.item} onClick={() => setFilter(item)}>
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
