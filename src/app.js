import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import productsRoutes from './routes/productsRoutes.js';
import cartsRoutes from './routes/cartsRoutes.js';
import ticketsRoutes from './routes/ticketsRoutes.js';

dotenv.config()
connectDB()

const app = express()

app.use(express.json())

app.use('/api/products', productsRoutes)
app.use('/api/carts', cartsRoutes)
app.use('/api/tickets', ticketsRoutes)

app.listen(process.env.PORT, ()=> {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})