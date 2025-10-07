/*
  Warnings:

  - You are about to drop the `item` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `item`;

-- CreateTable
CREATE TABLE `items` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `image` VARCHAR(191) NULL,
    `price` DOUBLE NULL,
    `properties` VARCHAR(191) NULL,
    `size` INTEGER NULL,
    `blockchain` VARCHAR(191) NULL,
    `royatity` DOUBLE NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
