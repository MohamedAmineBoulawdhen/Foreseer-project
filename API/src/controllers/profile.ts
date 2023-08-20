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

    // console.log(await ProfileModel.find());
    const profiles = await ProfileModel.find().skip(skip).limit(pageSize);
    const totalProfiles = await ProfileModel.countDocuments();

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
