import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import drillRoutes from './routes/drill.route.js';
import path from "path";

dotenv.config(); 

const app = express();
const PORT = process.env.PORT;

const __dirname = path.resolve();

app.use(express.json()); //allows us to accept JSON data in the req.body

app.use("/api/drills",drillRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/Frontend/dist")));

    app.get("*",(req,res)=> {
        res.sendFile(path.resolve(__dirname,"Frontend","dist","index.html"));
    })
}

app.listen(PORT,() =>{
    connectDB();
    console.log("server started at http://localhost:"+PORT);
});






