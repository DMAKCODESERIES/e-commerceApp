import express, { json } from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import cors from 'cors';
import { app } from './app.js';

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://daniyalabbasi0349:Abbasi123@cluster0.1gpoc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log('connected to mongodb')

    } catch (error) {
        console.error(error.message)
    }
}
connectDB()
const port = 8000;
app.listen(port, () => {
    console.log(`server is runnig${port}`)
})











