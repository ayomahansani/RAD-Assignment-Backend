import express from "express";
import {getAllOrders} from "../database/prisma-data-store/order-data";

const router = express.Router();


// save order
router.post("/add", async (req, res) => {
    const order = req.body;
})


// get all orders
router.get("/view", async (req, res) => {
    try {
        const orders = await getAllOrders();
        res.json(orders);
    } catch(error){
        console.log("Error getting orders : ", error);
    }
})


export default router;