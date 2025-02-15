-- CreateTable
CREATE TABLE `OrderDetails` (
    `order_details_id` INTEGER NOT NULL AUTO_INCREMENT,
    `order_id` INTEGER NOT NULL,
    `item` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,
    `unitPrice` DECIMAL(65, 30) NOT NULL,
    `total` DECIMAL(65, 30) NOT NULL,

    PRIMARY KEY (`order_details_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
