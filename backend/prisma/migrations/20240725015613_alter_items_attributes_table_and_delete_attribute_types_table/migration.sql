/*
  Warnings:

  - You are about to drop the column `item_id` on the `attributes` table. All the data in the column will be lost.
  - You are about to drop the column `type_id` on the `attributes` table. All the data in the column will be lost.
  - You are about to drop the `attribute_types` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `type` to the `attributes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `attributes` DROP COLUMN `item_id`,
    DROP COLUMN `type_id`,
    ADD COLUMN `collection_id` INTEGER NULL,
    ADD COLUMN `item_count` INTEGER NULL,
    ADD COLUMN `type` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `items` ADD COLUMN `attributes` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `attribute_types`;

-- AddForeignKey
ALTER TABLE `attributes` ADD CONSTRAINT `attributes_collection_id_fkey` FOREIGN KEY (`collection_id`) REFERENCES `collections`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
