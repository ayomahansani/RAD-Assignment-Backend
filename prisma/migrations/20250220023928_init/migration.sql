-- CreateTable
CREATE TABLE `Supplier` (
    `supplier_id` INTEGER NOT NULL AUTO_INCREMENT,
    `supplier_name` VARCHAR(191) NOT NULL,
    `supplier_phone` VARCHAR(191) NOT NULL,
    `supplier_email` VARCHAR(191) NOT NULL,
    `supplier_address` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`supplier_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SuppliersAndFlowersDetails` (
    `supplier_flower_detail_id` INTEGER NOT NULL AUTO_INCREMENT,
    `supplier_id` INTEGER NOT NULL,
    `flower_code` INTEGER NOT NULL,
    `flower_qty_on_hand` INTEGER NOT NULL,

    PRIMARY KEY (`supplier_flower_detail_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
