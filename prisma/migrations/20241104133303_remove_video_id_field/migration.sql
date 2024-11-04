/*
  Warnings:

  - You are about to drop the column `vedioId` on the `apartment` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Apartment_vedioId_key` ON `apartment`;

-- AlterTable
ALTER TABLE `apartment` DROP COLUMN `vedioId`;
