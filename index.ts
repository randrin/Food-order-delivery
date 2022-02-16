import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import morgan from "morgan";
import { AdminRoute, VendorRoute } from "./routes";
import { MONGODB_URL } from "./config";

const app = express();

// DB
mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((error) => {
    console.log("Error connected to mongodb:", error.reason);
  });

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES
app.use("/admin", AdminRoute);
app.use("/vendor", VendorRoute);

app.listen(3000, () => {
  console.clear();
  console.log("Listeng port");
});
