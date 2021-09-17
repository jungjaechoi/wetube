import express from "express";
import {see, edit, upload, deleteVideo} from "../controllers/videocontroller"
// 하나씩 export할 때는  import할 때 변수명 정확히 받아와야함.

const videoRouter = express.Router();


videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)", see);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);
videoRouter.get("/:id(\\d+)/edit", edit);

export default videoRouter;

//default는 하나밖에 수출못함