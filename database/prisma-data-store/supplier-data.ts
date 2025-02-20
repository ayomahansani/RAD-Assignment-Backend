import {PrismaClient} from '@prisma/client';
import {Supplier} from "../../models/Supplier";

const prisma = new PrismaClient();

// save supplier
export async function SupplierAdd(supplier: Supplier) {
    try {
        // create the supplier
        const newSupplier = await prisma.supplier.create({
            data: {
                supplier_name: supplier.supplier_name,
                supplier_phone: supplier.supplier_phone,
                supplier_email: supplier.supplier_email,
                supplier_address: supplier.supplier_address,
            },
        });

        // save the suppliers and flowers details
        let savedOSuppliersAndFlowersDetails = await prisma.suppliersAndFlowersDetails.createMany({
            data: supplier.supplied_Flowers.map((flower) => ({
                supplier_id: newSupplier.supplier_id,
                flower_code: flower.flower_code,
                flower_qty_on_hand: flower.flower_qty_on_hand,
            })),
        });

        console.log("Supplier Added : ", newSupplier);
        return newSupplier;
    } catch (error) {
        console.error("Error adding supplier : ", error);
        throw error;
    }
}


// get all suppliers
export async function getAllSuppliers() {
    try {
        const suppliers = await prisma.supplier.findMany();
        return await Promise.all(
            suppliers.map(async (supplier) => {
                const suppliersAndFlowersDetails = await prisma.suppliersAndFlowersDetails.findMany({
                    where: {supplier_id: supplier.supplier_id},
                });
                return {...supplier, supplied_Flowers: suppliersAndFlowersDetails};
            })
        );
    } catch (err) {
        console.error("Error getting suppliers:", err);
        throw err;
    }
}

// delete supplier
export async function SupplierDelete(supplierId: number) {
    try {
        // Delete the flowers linked to the supplier
        await prisma.suppliersAndFlowersDetails.deleteMany({
            where: { supplier_id: supplierId },
        });

        // Delete the supplier
        const deletedSupplier = await prisma.supplier.delete({
            where: { supplier_id: supplierId },
        });

        console.log("Supplier deleted:", deletedSupplier);
        return deletedSupplier;
    } catch (err) {
        console.error("Error deleting supplier:", err);
        throw new Error("Failed to delete supplier");
    }
}


// update supplier
export async function SupplierUpdate(supplierId: number, supplier: Supplier) {
    try {
        // Update the supplier's basic information
        const updatedSupplier = await prisma.supplier.update({
            where: { supplier_id: supplierId },
            data: {
                supplier_name: supplier.supplier_name,
                supplier_phone: supplier.supplier_phone,
                supplier_email: supplier.supplier_email,
                supplier_address: supplier.supplier_address,
            },
        });

        // Remove existing flowers and add the updated list
        await prisma.suppliersAndFlowersDetails.deleteMany({
            where: { supplier_id: supplierId },
        });

        // Save the updated flowers details
        const savedFlowersDetails = await prisma.suppliersAndFlowersDetails.createMany({
            data: supplier.supplied_Flowers.map((flower) => ({
                supplier_id: supplierId,
                flower_code: flower.flower_code,
                flower_qty_on_hand: flower.flower_qty_on_hand,
            })),
        });

        console.log("Supplier updated:", updatedSupplier);
        return updatedSupplier;
    } catch (err) {
        console.error("Error updating supplier:", err);
        throw new Error("Failed to update supplier");
    }
}

