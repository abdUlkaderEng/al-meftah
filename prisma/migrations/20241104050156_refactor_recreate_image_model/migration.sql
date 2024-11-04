-- AlterTable
ALTER TABLE `apartment` ADD COLUMN `video` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `commercialestate` ADD COLUMN `video` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `touristestate` ADD COLUMN `video` VARCHAR(255) NULL;

-- CreateTable
CREATE TABLE `Image` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(255) NOT NULL,
    `apartmentId` INTEGER NULL,
    `commercialEstateId` INTEGER NULL,
    `agriculturalEstateId` INTEGER NULL,
    `touristEstateId` INTEGER NULL,
    `pledgeBeforeId` INTEGER NULL,
    `pledgeAfterId` INTEGER NULL,

    UNIQUE INDEX `Image_pledgeBeforeId_key`(`pledgeBeforeId`),
    UNIQUE INDEX `Image_pledgeAfterId_key`(`pledgeAfterId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_apartmentId_fkey` FOREIGN KEY (`apartmentId`) REFERENCES `Apartment`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_commercialEstateId_fkey` FOREIGN KEY (`commercialEstateId`) REFERENCES `CommercialEstate`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_agriculturalEstateId_fkey` FOREIGN KEY (`agriculturalEstateId`) REFERENCES `AgriculturalEstate`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_touristEstateId_fkey` FOREIGN KEY (`touristEstateId`) REFERENCES `TouristEstate`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_pledgeBeforeId_fkey` FOREIGN KEY (`pledgeBeforeId`) REFERENCES `Pledge`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_pledgeAfterId_fkey` FOREIGN KEY (`pledgeAfterId`) REFERENCES `Pledge`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
