import express from "express";
import router from "./controller";
import {SERVER_CONFIG} from "./config";
import {l, createHTML} from "./utils";
express()
 	.all(({path},res,next)=>{console.log(path);next()})
	.use(express.static("./static"))
	.use(router)
	.listen(SERVER_CONFIG.port);