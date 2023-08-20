import express from "express";
import profile from "./profile";

const router = express.Router();

export default (): express.Router => {
  profile(router);

  router.get("/", (req: express.Request, res: express.Response) => {
    res.status(200).send("home page api");
  });

  return router;
};
