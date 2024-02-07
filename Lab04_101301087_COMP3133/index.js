import express from "express";
import * as mongoose from "mongoose";
import {userRoutes} from "./routes/userRoutes.js";

const app = express();
app.use(express.json());

mongoose.connect('mongodb://admin:password@localhost:27017/lab04')
    .then(success => console.log('Successfully connected to mongodb'))
    .catch(err => console.error(`Error during mongodb connection: ${err}`));

app.use(userRoutes);

app.listen(8081, () => {
    console.log('Server is running')
})