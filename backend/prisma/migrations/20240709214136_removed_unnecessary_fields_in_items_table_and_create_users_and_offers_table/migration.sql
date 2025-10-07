/*
  Warnings:

  - You are about to drop the column `blockchain` on the `items` table. All the data in the column will be lost.
  - You are about to drop the column `properties` on the `items` table. All the data in the column will be lost.
  - You are about to drop the column `royatity` on the `items` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `items` table. All the data in the column will be lost.
  - Added the required column `creator` to the `items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owner` to the `items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `items` DROP COLUMN `blockchain`,
    DROP COLUMN `properties`,
    DROP COLUMN `royatity`,
    DROP COLUMN `size`,
    ADD COLUMN `creator` INTEGER NOT NULL,
    ADD COLUMN `owner` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `offers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_id` INTEGER NULL,
    `user_id` INTEGER NULL,
    `price` INTEGER NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
