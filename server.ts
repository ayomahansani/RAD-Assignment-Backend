import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import authRoutes, {authenticateToken} from "./routes/auth-routes";
import flowerRoutes from "./routes/flower-routes";
import customerRoutes from "./routes/customer-routes";
import orderRoutes from "./routes/order-routes";

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));

console.log("Loaded SECRET_KEY:", process.env.SECRET_KEY);

app.use('/auth', authRoutes);
app.use('/flower', flowerRoutes);
app.use('/customer', customerRoutes);
app.use('/order', orderRoutes);

app.use(authenticateToken);

app.listen(3000, (err =>{
    console.log("Server running on port 3000");
}));

app.use('/', (req, res, next)=>{
    res.status(200).send('Not Found');
});