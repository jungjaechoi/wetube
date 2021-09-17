import express from "express";
import {join, edit, remove,logout, see} from "../controllers/usercontroller"

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/remove", remove);
userRouter.get("/join", join);
userRouter.get(":id", see);


export default userRouter;
