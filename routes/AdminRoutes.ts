import express, { Request, Response, NextFunction } from "express";
import { CreateAdmin, GetAdmin } from "../controllers";

const router = express.Router();

router.post("/", CreateAdmin);
router.get("/", GetAdmin);

export { router as AdminRoute };
