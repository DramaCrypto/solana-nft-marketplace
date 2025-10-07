/*
  Warnings:

  - You are about to drop the column `image_background` on the `collections` table. All the data in the column will be lost.
  - You are about to drop the column `image_foreground` on the `collections` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `collections` DROP COLUMN `image_background`,
    DROP COLUMN `image_foreground`,
    ADD COLUMN `image` VARCHAR(191) NULL,
    ADD COLUMN `user_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `collections` ADD CONSTRAINT `collections_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
