-- AlterTable
ALTER TABLE `items` ADD COLUMN `collection_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `items` ADD CONSTRAINT `items_collection_id_fkey` FOREIGN KEY (`collection_id`) REFERENCES `collections`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
