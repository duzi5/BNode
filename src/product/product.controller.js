import { Router } from "express";

export const productRouter = Router();

const router = Router();

router.get("/", (req, res) => {
  res.send("hello, world");
});
