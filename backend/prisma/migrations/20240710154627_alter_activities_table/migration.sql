/*
  Warnings:

  - You are about to drop the column `from` on the `activities` table. All the data in the column will be lost.
  - You are about to drop the column `to` on the `activities` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `activities` DROP COLUMN `from`,
    DROP COLUMN `to`,
    ADD COLUMN `from_user_id` INTEGER NULL,
    ADD COLUMN `to_user_id` INTEGER NULL;
