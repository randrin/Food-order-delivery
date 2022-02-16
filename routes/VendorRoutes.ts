import express, { Request, Response, NextFunction } from "express";
import { CreateVendor } from "../controllers";

const router = express.Router();

router.post("/", CreateVendor);
router.get("/", (req: Request, res: Response, next: NextFunction) => {
    return res.json("Vendor router");
  });

export { router as VendorRoute };
