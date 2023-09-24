import { Router } from "express";

export const userRouter = Router();

const router = Router();

userRouter.use("user", router);

router.get("/", (req, res) => {
  res.send("hello, world");
});

router.get("/:usuario", (req, res) => {
  res.send();
});
