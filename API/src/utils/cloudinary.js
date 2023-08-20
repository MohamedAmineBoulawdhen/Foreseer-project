import { v2 as cloudinary } from "cloudinary";
import mongoose from "mongoose";

import dotenv from "dotenv";
import { ProfileModel } from "../models/profile";
dotenv.config({ path: "../../config/.env" });
cloudinary.config({
  cloud_name: process.env.Cloud_Name,
  api_key: process.env.Api_Key,
  api_secret: process.env.Api_Secret,
});

async function runCloudinary() {
  try {
    // Connect to MongoDB
    await mongoose.connect(
      "mongodb+srv://mohamedamineboulawdhenjunk:8dBUK8qBxNKq65t1@omarproject.wzx6rox.mongodb.net/trade"
    );

    // Retrieve data from MongoDB
    const documents = await ProfileModel.find(); // Replace with your query

    // Upload images to Cloudinary and update the database
    for (const doc of documents) {
      const result = await cloudinary.uploader.upload(doc.profilePhoto);

      // Update the document in the database with the secure URL
      await ProfileModel.findByIdAndUpdate(doc._id, {
        $set: { profilePhoto: result.secure_url },
      });

      console.log(
        `Image uploaded and URL updated for document with _id: ${doc._id}`
      );
    }

    console.log("All images uploaded and URLs updated successfully.");
  } catch (error) {
    console.error("Error:", error);
  } finally {
    // Disconnect from MongoDB
    await mongoose.disconnect();
  }
}

runCloudinary();
