"use client";
import React, { useState } from "react";
import image from "@/public/assests/Images/house.jpg";
import { Box, Button } from "@radix-ui/themes";
import Image from "next/image";
const ImagesSlideShow = () => {
  const images = [image, image, image];
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
    <Box>
      <Image src={images[currentIndex]} alt="" />
    <Button onClick={prevImage}>ق</Button>
    <Button onClick={nextImage}>ب</Button>
      </Box>
  );
};

export default ImagesSlideShow;
