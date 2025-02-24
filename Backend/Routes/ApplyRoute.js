import express from 'express' ;
export const router = express.Router()

import { createTherepy, getTherepy } from "../Controllers/ApplyController.js"











router.post('/createTherepy',createTherepy)
router.get('/Therepy',getTherepy)