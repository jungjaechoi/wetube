// 하나씩 export할 때는  import할 때 변수명 정확히 받아와야함.

import express from "express";
import { 
    watch, 
    getEdit, 
    postEdit, 
    getUpload,
    postUpload   
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
videoRouter.get("/:id(\\d+)/edit", getEdit);
videoRouter.post("/:id(\\d+)/edit", postEdit);
//- videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.get("/upload",getUpload);
videoRouter.post("/upload",postUpload);

export default videoRouter;
//default는 하나밖에 수출못함