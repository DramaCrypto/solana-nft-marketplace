/*
  Warnings:

  - A unique constraint covering the columns `[contract_address]` on the table `collections` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[contract_address]` on the table `items` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[wallet_address]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `collections_contract_address_key` ON `collections`(`contract_address`);

-- CreateIndex
CREATE UNIQUE INDEX `items_contract_address_key` ON `items`(`contract_address`);

-- CreateIndex
CREATE UNIQUE INDEX `users_wallet_address_key` ON `users`(`wallet_address`);
