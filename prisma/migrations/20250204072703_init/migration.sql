-- CreateTable
CREATE TABLE `Flower` (
    `flower_code` INTEGER NOT NULL AUTO_INCREMENT,
    `flower_name` VARCHAR(191) NOT NULL,
    `flower_image` VARCHAR(191) NOT NULL,
    `flower_size` VARCHAR(191) NOT NULL,
    `flower_colour` VARCHAR(191) NOT NULL,
    `flower_unit_price` INTEGER NOT NULL,
    `flower_qty_on_hand` INTEGER NOT NULL,

    PRIMARY KEY (`flower_code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
