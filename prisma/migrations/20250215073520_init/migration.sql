/*
  Warnings:

  - You are about to drop the `OrderDetails` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `OrderDetails`;

-- CreateTable
CREATE TABLE `OrderDetail` (
    `order_details_id` INTEGER NOT NULL AUTO_INCREMENT,
    `order_id` INTEGER NOT NULL,
    `item` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,
    `unitPrice` DECIMAL(65, 30) NOT NULL,
    `total` DECIMAL(65, 30) NOT NULL,

    PRIMARY KEY (`order_details_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
