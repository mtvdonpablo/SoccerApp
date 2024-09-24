import express from 'express';
import Drill from '../models/drill.model.js';
import { createDrill, deleteDrill, getDrills, updateDrill } from '../controllers/drill.controler.js';


const router = express.Router();

router.get("/", getDrills);

router.post("/",createDrill);

router.put("/:id", updateDrill );

router.delete("/:id", deleteDrill);

export default router;