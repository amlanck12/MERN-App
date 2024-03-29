import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {

    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@mern-todo.hprrrsk.mongodb.net/?retryWrites=true&w=majority`

    mongoose.connect(MONGODB_URI);

    mongoose.connection.on('connected', () => {
        console.log('Database connected sucessfully.');
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected.');
    });

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the Database', error.message);
    });

}

export default Connection;