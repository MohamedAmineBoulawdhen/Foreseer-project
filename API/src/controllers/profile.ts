import express from "express";
import { ProfileModel } from "../models/profile";

export const getProfiles = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const pageSize = parseInt(req.query.pageSize as string) || 10;
    const skip = (page - 1) * pageSize;
    const followers = parseInt(req.query.followers as string) || 0;
    const engagementRate = parseInt(req.query.engagementRate as string) || 0;
    const category: any = req.query.category || "";

    const projection =
      "follower_count following_count biography engagementRate full_name sentimentAnalysis categories profilePhoto username base64"; //optimizing the response time

    const filter: any = {};
    filter.follower_count = { $gte: followers };
    filter.engagementRate = { $gte: engagementRate };
    if (category) {
      const orConditions = [];
      for (let i = 0; i < 6; i++) {
        const key = `categories.${i}.0`;
        const condition = {};
        condition[key] = category;
        orConditions.push(condition);
      }
      filter.$or = orConditions;
    }

    const profiles = await ProfileModel.find(filter, projection)
      .sort({ follower_count: -1 })
      .skip(skip)
      .limit(pageSize)
      .lean(); // Use lean queries for read-only operations
    const totalProfiles = await ProfileModel.countDocuments(filter);
    // console.log(profiles);
    // console.log(profiles);
    const totalPages = Math.ceil(totalProfiles / pageSize);

    return res.status(200).json({
      profiles,
      currentPage: page,
      totalPages,
      totalProfiles,
    });
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
};
