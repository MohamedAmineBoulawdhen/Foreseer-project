import { getProfiles } from "./../controllers/profile";
import express from "express";

export default (router: express.Router) => {
  router.get("/profiles", getProfiles);
};
