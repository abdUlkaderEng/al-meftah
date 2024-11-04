/*
  Warnings:

  - You are about to drop the column `vedioId` on the `commercialestate` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `CommercialEstate_vedioId_key` ON `commercialestate`;

-- AlterTable
ALTER TABLE `commercialestate` DROP COLUMN `vedioId`;
