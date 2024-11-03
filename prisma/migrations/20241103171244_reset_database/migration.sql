/*
  Warnings:

  - You are about to drop the column `imageId` on the `agriculturalestate` table. All the data in the column will be lost.
  - You are about to drop the column `imageId` on the `apartment` table. All the data in the column will be lost.
  - You are about to drop the column `imageId` on the `commercialestate` table. All the data in the column will be lost.
  - You are about to drop the column `imageBeforId` on the `pledge` table. All the data in the column will be lost.
  - You are about to drop the column `imageId` on the `touristestate` table. All the data in the column will be lost.
  - You are about to drop the `image` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `video` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `agriculturalestate` DROP FOREIGN KEY `AgriculturalEstate_imageId_fkey`;

-- DropForeignKey
ALTER TABLE `apartment` DROP FOREIGN KEY `Apartment_imageId_fkey`;

-- DropForeignKey
ALTER TABLE `apartment` DROP FOREIGN KEY `Apartment_vedioId_fkey`;

-- DropForeignKey
ALTER TABLE `commercialestate` DROP FOREIGN KEY `CommercialEstate_imageId_fkey`;

-- DropForeignKey
ALTER TABLE `commercialestate` DROP FOREIGN KEY `CommercialEstate_vedioId_fkey`;

-- DropForeignKey
ALTER TABLE `pledge` DROP FOREIGN KEY `Pledge_imageBeforId_fkey`;

-- DropForeignKey
ALTER TABLE `touristestate` DROP FOREIGN KEY `TouristEstate_imageId_fkey`;

-- AlterTable
ALTER TABLE `agriculturalestate` DROP COLUMN `imageId`;

-- AlterTable
ALTER TABLE `apartment` DROP COLUMN `imageId`;

-- AlterTable
ALTER TABLE `commercialestate` DROP COLUMN `imageId`;

-- AlterTable
ALTER TABLE `pledge` DROP COLUMN `imageBeforId`;

-- AlterTable
ALTER TABLE `touristestate` DROP COLUMN `imageId`;

-- DropTable
DROP TABLE `image`;

-- DropTable
DROP TABLE `video`;
