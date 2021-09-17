<<<<<<< HEAD
import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const PORT = 4000;//암묵적으로 4000사용

const app = express();
const logger = morgan("dev"); //morgan에서 dev툴 사용, middleware 모듈

app.set("view engine", "pug");//pug 쓸 때 호출
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleLsn = () => 
console.log(`Server listening on port http://localhost:${PORT}`);

=======
import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const PORT = 4000;//암묵적으로 4000사용

const app = express();
const logger = morgan("dev"); //morgan에서 dev툴 사용, middleware 모듈

app.set("view engine", "pug");//pug 쓸 때 호출
app.use(express.urlencoded({extended:true}));
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleLsn = () => 
console.log(`Server listening on port http://localhost:${PORT}`);

>>>>>>> dae88224445e71dba03015a393665da46b3212de
app.listen(4000, handleLsn);