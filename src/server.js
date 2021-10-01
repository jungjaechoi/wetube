import express from "express";
import morgan from "morgan";
import rootRouter from "./routers/rootRouter";
import videoRouter from "./routers/videoRouter";
// import userRouter from "./routers/userRouter";

const app = express();
const logger = morgan("dev"); //morgan에서 dev툴 사용, middleware 모듈

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use("/static", express.static("assets"));
app.use(express.urlencoded({extended:true})); 
app.use("/", rootRouter);
app.use("/videos", videoRouter);
// app.use("/users", userRouter);

export default app;