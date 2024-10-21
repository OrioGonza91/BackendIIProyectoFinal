import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { dbName: process.env.USE_DB})
        console.log('BBDD conectada')
    } catch (error) {
        console.log('Error en conexion a BBDD:', error)
        process.exit(1)
    }
}

export default connectDB;