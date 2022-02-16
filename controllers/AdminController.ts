import express, { Request, Response, NextFunction } from "express";
import { CreateAdminInput } from "../dto/Admin.dto";

export const CreateAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    name,
    ownerName,
    pincode,
    address,
    email,
    foodType,
    phone,
    password,
  } = <CreateAdminInput>req.body;
  return res
    .status(201)
    .json({
      name,
      ownerName,
      pincode,
      address,
      email,
      foodType,
      phone,
      password,
    });
};

export const GetAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.json("Admin router");
};
