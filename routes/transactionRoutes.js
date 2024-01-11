import express from 'express'
import { getAllByCategory, getAllById } from '../controllers/transactionController.js';

const router = express.Router()

router.get('/getAllByCustomerId/:id',getAllById);
router.get('/getAllByCategory/:category',getAllByCategory);

export default router