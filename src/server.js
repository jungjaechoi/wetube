import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const app = express();
const logger = morgan("dev"); //morgan에서 dev툴 사용, middleware 모듈

app.set("view engine", "pug");//pug 쓸 때 호출
app.use(express.urlencoded({extended:true}));
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

export default app;