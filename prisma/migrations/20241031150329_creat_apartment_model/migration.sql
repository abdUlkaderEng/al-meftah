-- CreateTable
CREATE TABLE `Apartment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `estateType` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `dierction` VARCHAR(191) NOT NULL,
    `floor` VARCHAR(191) NOT NULL,
    `services` VARCHAR(191) NOT NULL,
    `apartmentStatus` ENUM('NEW_BUILD', 'OLD_BUILD') NOT NULL,
    `isSold` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Image` (
    `src` TEXT NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `imageID` INTEGER NOT NULL,

    UNIQUE INDEX `Image_imageID_key`(`imageID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CommercialEstate` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `estateType` VARCHAR(191) NOT NULL,
    `dierction` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `services` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_imageID_fkey` FOREIGN KEY (`imageID`) REFERENCES `Apartment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
