/*
  Warnings:

  - The primary key for the `OrderDetail` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `order_details_id` on the `OrderDetail` table. All the data in the column will be lost.
  - Added the required column `order_detail_id` to the `OrderDetail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `OrderDetail` DROP PRIMARY KEY,
    DROP COLUMN `order_details_id`,
    ADD COLUMN `order_detail_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`order_detail_id`);
