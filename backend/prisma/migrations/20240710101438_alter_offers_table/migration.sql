/*
  Warnings:

  - You are about to drop the column `product_id` on the `offers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `offers` DROP COLUMN `product_id`,
    ADD COLUMN `item_id` INTEGER NULL;
