import express from "express";
import dotenv from "dotenv";
import {Flower} from "../models/Flower";
import {FlowerAdd, FlowerDelete, FlowerUpdate, getAllFlowers} from "../database/prisma-data-store/flower-data";

dotenv.config();

const router = express.Router();

// save flower
router.post("/add", async (req, res) => {
    console.log(req.body);
    const flower: Flower = req.body;
    try {
        const addedFlower = await FlowerAdd(flower);
        res.status(201).json(addedFlower);
    } catch (error) {
        console.log("Error adding flower : ", error);
        res.status(400).json({ error: "Error adding flower" });
    }
});

// delete flower
router.delete("/delete/:flower_code", async (req, res) => {
    const flowerCode : number = +req.params.flower_code; // Convert string to number using +
    try {
        const deletedFlower = await FlowerDelete(flowerCode);
        res.json(deletedFlower);
    } catch(error){
        console.log("Error deleting flower : ", error);
    }
});

// update flower
router.put("/update/:flower_code", async (req, res) => {
    const flowerCode : number = +req.params.flower_code; // Convert string to number using +
    const flower: Flower = req.body;
    try {
        const updatedFlower = await FlowerUpdate(flowerCode, flower);
        if(updatedFlower) {
            res.json(updatedFlower);
        } else {
            res.status(404).json({ message: "Flower not found" });
        }
    } catch (error) {
        console.error("Error updating flower : ", error);
        res.status(500).json({ message: "Internal server error" });
    }
})

// get all flowers
router.get("/view", async (req, res) => {
    try {
        const flowers = await getAllFlowers();
        res.json(flowers);
    } catch(error){
        console.log("Error getting flowers : ", error);
    }
})


export default router;