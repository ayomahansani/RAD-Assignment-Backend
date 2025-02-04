import express from "express";
import dotenv from "dotenv";
import {Flower} from "../models/Flower";
import {FlowerAdd} from "../database/prisma-data-store/flower-data";

dotenv.config();

const router = express.Router();

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


export default router;