import express from 'express'
import { getAllCustomers } from '../controllers/customerController.js';

const router = express.Router()

router.get("/getAll/:page", getAllCustomers);

export default router