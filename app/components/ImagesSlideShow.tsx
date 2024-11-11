"use client";
import React, { useState } from "react";
import image1 from "@/public/assests/Images/house.jpg";
import image2 from "@/public/assests/Images/house2.jpg";
import image3 from "@/public/assests/Images/House1 (2).jpg";

import { Box, Button, Flex } from "@radix-ui/themes";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
const ImagesSlideShow = () => {
  const images = [image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <Flex align="center" justify={"center"} className="relative"  >
      <Button asChild variant="surface"   className="sticky left-0.5 z-10 w-9" onClick={prevImage}><ChevronLeftIcon /></Button>
      <Image  className="object-fill " src={images[currentIndex]} alt="" />
      <Button asChild variant="surface"  className="sticky right-0.5 z-10 w-9" onClick={nextImage}><ChevronRightIcon /></Button>
    </Flex>
  );
};

export default ImagesSlideShow;
