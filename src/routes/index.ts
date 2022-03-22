import { Request, Response, Router } from "express";
import { createImage, getImages } from "../controllers/image.controller";
import multer from "../middlewares/multer";

const router = Router();

router.route('/images')
    .post(multer.single('image'),createImage)
    .get(getImages)

export default router;