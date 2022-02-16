import { Request, Response, NextFunction } from "express";
import { CreateVendorInput } from "../dto/Vendor.dto";
import { vendor } from "../models";
import { GeneratePassword, GenerateSalt } from "../utility";

export const CreateVendor = async (
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
  } = <CreateVendorInput>req.body;
  const foundVendor = await vendor.findOne({ email });

  if (foundVendor != null) {
    return res
      .status(404)
      .json({ message: `Vendor already present with the email: ${email}` });
  }

  // Generate salt
  const salt = await GenerateSalt();

  // Generate vendor password
  const vendorPassword = await GeneratePassword(password, salt);

  const createdVendor = await vendor.create({
    name,
    ownerName,
    pincode,
    email,
    foodType,
    phone,
    password: vendorPassword,
    salt,
    serviceAvailable: true,
    coverImages: [],
    rating: 0,
  });

  return res.status(201).json(createdVendor);
};
