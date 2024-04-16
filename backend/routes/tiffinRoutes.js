import express from "express";
import {
  getAllTiffins,
  createTiffin,
} from "../controllers/tiffinController.js";

const router = express.Router();

router.get("/", getAllTiffins);
router.post("/", createTiffin);

export default router;
