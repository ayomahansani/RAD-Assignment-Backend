import express from "express";
import {Supplier} from "../models/Supplier";
import {
    getAllSuppliers,
    SupplierAdd,
    SupplierDelete,
    SupplierUpdate
} from "../database/prisma-data-store/supplier-data";


const router = express.Router();

// save supplier
router.post("/add", async (req, res) => {
    const supplier: Supplier = req.body;
    console.log("Supplier : ", supplier)

    try {
        const addedSupplier = await SupplierAdd(supplier);
        res.send(addedSupplier);
    } catch (error) {
        console.log("Error adding supplier : ", error);
        res.status(400).json({ error: "Error adding supplier" });
    }
})

// delete supplier
router.delete("/delete/:supplier_id", async (req, res) => {
    const supplierId: number = +req.params.supplier_id; // Convert id to number
    try{
        const deletedSupplier = await SupplierDelete(supplierId);
        res.json(deletedSupplier);
    }catch(err){
        console.log("error deleting supplier", err);
    }
})

// update supplier
router.put("/update/:supplier_id", async (req, res) => {
    const supplierId: number = +req.params.supplier_id; // Convert id to number
    const supplier: Supplier = req.body;

    try {
        const updatedSupplier = await SupplierUpdate(supplierId, supplier);
        if (updatedSupplier) {
            res.json(updatedSupplier);
        } else {
            res.status(404).json({ message: "Supplier not found" });
        }
    } catch (err) {
        console.error("Error updating supplier", err);
        res.status(500).json({ message: "Internal server error" });
    }
});


// get all suppliers
router.get("/view", async (req, res) => {
    try {
        const suppliers = await getAllSuppliers();
        res.json(suppliers);
    } catch(error){
        console.log("Error getting suppliers : ", error);
    }
})

export default router;