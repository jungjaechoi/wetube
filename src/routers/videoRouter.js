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

videoRouter.get("/upload",getUpload);
videoRouter.post("/upload",postUpload);
videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter.get("/:id([0-9a-f]{24})/edit", getEdit);
videoRouter.post("/:id([0-9a-f]{24})/edit", postEdit);
//- videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);


export default videoRouter;
//default는 하나밖에 수출못함