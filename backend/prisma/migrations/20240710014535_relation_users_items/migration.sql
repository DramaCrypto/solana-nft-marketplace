/*
  Warnings:

  - You are about to drop the column `creator` on the `items` table. All the data in the column will be lost.
  - You are about to drop the column `owner` on the `items` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `items` DROP COLUMN `creator`,
    DROP COLUMN `owner`,
    ADD COLUMN `creator_id` INTEGER NULL,
    ADD COLUMN `owner_id` INTEGER NULL,
    ADD COLUMN `status` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `activities` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `item_id` INTEGER NULL,
    `type` VARCHAR(191) NULL,
    `price` DOUBLE NULL,
    `from` INTEGER NULL,
    `to` INTEGER NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `items` ADD CONSTRAINT `items_creator_id_fkey` FOREIGN KEY (`creator_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `items` ADD CONSTRAINT `items_owner_id_fkey` FOREIGN KEY (`owner_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
