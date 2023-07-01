import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import router from "./api/routes";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

// Kết nối db
(async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to database");
    } catch (error) {
        console.log("Cannot connect to database: ", error);
    }
})();

app.use("/api", router);

// Khởi động server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Your app running on port ${PORT}`)
})