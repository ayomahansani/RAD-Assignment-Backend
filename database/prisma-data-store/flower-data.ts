import {PrismaClient} from '@prisma/client';
import {Flower} from "../../models/Flower";

const prisma = new PrismaClient();

// save flower
export async function FlowerAdd(f: Flower) {
    try {
        const newFlower = await prisma.flower.create({
            data: {
                flower_name: f.flower_name,
                flower_image: f.flower_image,
                flower_size: f.flower_size,
                flower_colour: f.flower_colour,
                flower_unit_price: f.flower_unit_price,
                flower_qty_on_hand: f.flower_qty_on_hand,
            }
        })
        console.log('Flower Added :', newFlower)
        return newFlower;
    } catch(error) {
        console.log("Error adding flower:", error);
        return null;
    }
}

// delete flower
export async function FlowerDelete(flowerCode: number) {
    try {
        const deletedFlower = await prisma.flower.delete({
            where: { flower_code: flowerCode},
        });
        console.log("Flower deleted:", flowerCode);
        return deletedFlower;
    } catch (error) {
        console.error("Error deleting flower : ", error);
        throw new Error("Failed to delete flower"); // Throw the error for proper handling
    }
}












