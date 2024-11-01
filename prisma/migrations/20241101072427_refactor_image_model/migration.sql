/*
  Warnings:

  - You are about to drop the column `isSold` on the `apartment` table. All the data in the column will be lost.
  - You are about to drop the column `imageID` on the `image` table. All the data in the column will be lost.
  - You are about to drop the column `src` on the `image` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `image` table. All the data in the column will be lost.
  - Added the required column `imageId` to the `Apartment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Apartment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageId` to the `CommercialEstate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageTitle` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `image` DROP FOREIGN KEY `Image_imageID_fkey`;

-- AlterTable
ALTER TABLE `apartment` DROP COLUMN `isSold`,
    ADD COLUMN `imageId` INTEGER NOT NULL,
    ADD COLUMN `isAvailable` ENUM('AVAILABLE', 'SOLD') NOT NULL DEFAULT 'AVAILABLE',
    ADD COLUMN `price` DECIMAL(65, 30) NOT NULL,
    MODIFY `location` VARCHAR(255) NOT NULL,
    MODIFY `dierction` VARCHAR(255) NOT NULL,
    MODIFY `services` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `commercialestate` ADD COLUMN `imageId` INTEGER NOT NULL,
    ADD COLUMN `isAvailable` ENUM('AVAILABLE', 'SOLD') NOT NULL DEFAULT 'AVAILABLE';

-- AlterTable
ALTER TABLE `image` DROP COLUMN `imageID`,
    DROP COLUMN `src`,
    DROP COLUMN `title`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `imageTitle` VARCHAR(255) NOT NULL,
    ADD COLUMN `url` TEXT NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `Apartment` ADD CONSTRAINT `Apartment_imageId_fkey` FOREIGN KEY (`imageId`) REFERENCES `Image`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CommercialEstate` ADD CONSTRAINT `CommercialEstate_imageId_fkey` FOREIGN KEY (`imageId`) REFERENCES `Image`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
