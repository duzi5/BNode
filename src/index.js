import express from "express";
import { userRouter } from "./user/user.controller.js";

const app = express();

app.use(userRouter);

app.listen(3001);
