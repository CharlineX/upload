import {Router} from "express";
import {resolve} from "path";
import {urlencoded} from "body-parser";
import multer from "multer";
import {SERVER_CONFIG} from "./config";
import readFileAsnyc from "./utils";
const {
	host,
	port
} = SERVER_CONFIG;
const router = Router();
router
	.route("/api/get_banner/:type")
	.get(({params}, res) => {
		let data = [];
		switch(params.type){
			case "home":
				data = [
					{
						url: "/images/banner/1.png",
						href: "/activity/1"
					},
					{
						url: "/images/banner/2.png",
						href: "/activity/2"
					},
					{
						url: "/images/banner/3.png",
						href: "/activity/3"
					},
					{
						url: "/images/banner/4.png",
						href: "/activity/4"
					}
				];
				break;
			case "me":
				data = [
					{
						url: "/images/banner/1.png",
						href: "/activity/1"
					},
					{
						url: "/images/banner/2.png",
						href: "/activity/2"
					}
				];
		}
		res.json({
			code: 0,
			data,
			message: "success"
		});
	});
router
	.route("*")
	.get(async (req,res)=>{
		res.send(await readFileAsnyc("./pages/index.html"))
	})
export default router;