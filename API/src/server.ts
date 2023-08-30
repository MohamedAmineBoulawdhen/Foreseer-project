import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import compression from "compression";
import dotenv from "dotenv";
import morgan from "morgan";
import router from "./routes/index";
// import { v2 as cloudinary } from "cloudinary";
// import runCloudinary from "./utils/cloudinary";
dotenv.config({ path: __dirname + "/../config/.env" });

// cloudinary.config({
//   cloud_name: process.env.Cloud_Name,
//   api_key: process.env.Api_Key,
//   api_secret: process.env.Api_Secret,
// });

const port = process.env.PORT || 8000;
const app = express();

//log type request _ status _ response time _ size
app.use(morgan("dev"));
// Enable CORS for all routes
const corsOptions = {
  origin: "http://localhost:5173",
};
app.use(cors(corsOptions));

//enable http response compression
app.use(compression());
//enable parsing og http request bodies in JSON format
app.use(express.json());
//enable parsing of http request cookies and make them available using req.cookies
app.use(cookieParser());

//connect to db
require("../config/connectToDB");

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});

app.use("/api", router());

// app.get("/", (req, res, next) => {
//   if (req.path === "/") {
//     res.status(200).send("home page backend");
//   } else {
//     next(Error("end point not found"));
//   }
// });

///////////////////////////////////////////////////////////

// import mongoose from "mongoose";

// import { ProfileModel } from "./models/profile";
// dotenv.config({ path: "../../config/.env" });
// cloudinary.config({
//   cloud_name: process.env.Cloud_Name,
//   api_key: process.env.Api_Key,
//   api_secret: process.env.Api_Secret,
// });

// async function runCloudinary() {
//   try {
//     // Connect to MongoDB
//     await mongoose.connect(
//       "mongodb+srv://mohamedamineboulawdhenjunk:8dBUK8qBxNKq65t1@omarproject.wzx6rox.mongodb.net/trade"
//     );

//     // Retrieve data from MongoDB
//     const documents = await ProfileModel.find(); // Replace with your query

//     // Upload images to Cloudinary and update the database
//     for (const doc of documents) {
//       const result = await cloudinary.uploader.upload(doc.profilePhoto);

//       // Update the document in the database with the secure URL
//       await ProfileModel.findByIdAndUpdate(doc._id, {
//         $set: { profilePhoto: result.secure_url },
//       });

//       console.log(
//         `Image uploaded and URL updated for document with _id: ${doc._id}`
//       );
//     }

//     console.log("All images uploaded and URLs updated successfully.");
//   } catch (error) {
//     console.error("Error:", error);
//   } finally {
//     // Disconnect from MongoDB
//     await mongoose.disconnect();
//   }
// }

// runCloudinary();
