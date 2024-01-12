import express from "express";
import {
  getAllCustomers,
  getCustomer,
} from "../controllers/customerController.js";

const router = express.Router();

router.get("/getAll/:page", getAllCustomers);
router.get("/search/:dniOrName", getCustomer);

export default router;
