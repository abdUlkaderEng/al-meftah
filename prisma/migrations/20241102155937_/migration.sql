/*
  Warnings:

  - A unique constraint covering the columns `[vedioId]` on the table `Apartment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[vedioId]` on the table `CommercialEstate` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `space` to the `Apartment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vedioId` to the `Apartment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `CommercialEstate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `space` to the `CommercialEstate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vedioId` to the `CommercialEstate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `apartment` ADD COLUMN `space` INTEGER NOT NULL,
    ADD COLUMN `vedioId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `commercialestate` ADD COLUMN `price` DECIMAL(65, 30) NOT NULL,
    ADD COLUMN `space` INTEGER NOT NULL,
    ADD COLUMN `vedioId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `AgriculturalEstate` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `estateType` VARCHAR(191) NOT NULL,
    `dierction` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `space` INTEGER NOT NULL,
    `price` DECIMAL(65, 30) NOT NULL,
    `isAvailable` ENUM('AVAILABLE', 'SOLD') NOT NULL DEFAULT 'AVAILABLE',
    `imageId` INTEGER NOT NULL,

    UNIQUE INDEX `AgriculturalEstate_imageId_key`(`imageId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TouristEstate` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `estateType` VARCHAR(191) NOT NULL,
    `dierction` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `space` INTEGER NOT NULL,
    `price` DECIMAL(65, 30) NOT NULL,
    `isAvailable` ENUM('AVAILABLE', 'SOLD') NOT NULL DEFAULT 'AVAILABLE',
    `imageId` INTEGER NOT NULL,

    UNIQUE INDEX `TouristEstate_imageId_key`(`imageId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pledge` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descriptionBefor` TEXT NOT NULL,
    `descriptionAfter` TEXT NOT NULL,
    `imageBeforId` INTEGER NOT NULL,

    UNIQUE INDEX `Pledge_imageBeforId_key`(`imageBeforId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Video` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `videoTitle` VARCHAR(255) NOT NULL,
    `url` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Apartment_vedioId_key` ON `Apartment`(`vedioId`);

-- CreateIndex
CREATE UNIQUE INDEX `CommercialEstate_vedioId_key` ON `CommercialEstate`(`vedioId`);

-- AddForeignKey
ALTER TABLE `Apartment` ADD CONSTRAINT `Apartment_vedioId_fkey` FOREIGN KEY (`vedioId`) REFERENCES `Video`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CommercialEstate` ADD CONSTRAINT `CommercialEstate_vedioId_fkey` FOREIGN KEY (`vedioId`) REFERENCES `Video`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AgriculturalEstate` ADD CONSTRAINT `AgriculturalEstate_imageId_fkey` FOREIGN KEY (`imageId`) REFERENCES `Image`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TouristEstate` ADD CONSTRAINT `TouristEstate_imageId_fkey` FOREIGN KEY (`imageId`) REFERENCES `Image`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pledge` ADD CONSTRAINT `Pledge_imageBeforId_fkey` FOREIGN KEY (`imageBeforId`) REFERENCES `Image`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
