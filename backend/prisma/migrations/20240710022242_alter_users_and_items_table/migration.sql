/*
  Warnings:

  - You are about to drop the column `owner_id` on the `items` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `items` DROP FOREIGN KEY `items_owner_id_fkey`;

-- AlterTable
ALTER TABLE `items` DROP COLUMN `owner_id`,
    ADD COLUMN `collector_id` INTEGER NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `address`,
    ADD COLUMN `wallet_address` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `items` ADD CONSTRAINT `items_collector_id_fkey` FOREIGN KEY (`collector_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
