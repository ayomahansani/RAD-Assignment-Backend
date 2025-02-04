import express from "express";
import dotenv from "dotenv";
import {Flower} from "../models/Flower";
import {FlowerAdd, FlowerDelete} from "../database/prisma-data-store/flower-data";

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


export default router;