import express from "express";
import {
  getAllByCategory,
  getAllByCustomerId,
} from "../controllers/transactionController.js";

const router = express.Router();

router.get("/getAllByCustomerId/:id/:page", getAllByCustomerId);
router.get("/getAllByCategory/:category/:page", getAllByCategory);

export default router;
