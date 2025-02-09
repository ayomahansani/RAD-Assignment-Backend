-- CreateTable
CREATE TABLE `Customer` (
    `customer_id` INTEGER NOT NULL AUTO_INCREMENT,
    `customer_firstName` VARCHAR(191) NOT NULL,
    `customer_lastName` VARCHAR(191) NOT NULL,
    `customer_phone` VARCHAR(191) NOT NULL,
    `customer_email` VARCHAR(191) NOT NULL,
    `customer_address` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`customer_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
