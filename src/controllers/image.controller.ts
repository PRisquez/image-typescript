import { Request, Response } from "express";
import Image from "../models/Image";

export async function createImage(req: Request, res: Response):Promise<Response>{

    const { title, description } = req.body;

    const newImage = {
        title, description,
        imagePath: req.file?.path
    }

    const image = new Image(newImage);
    await image.save();


    return res.json(image);
}

export async function getImages(req: Request, res: Response):Promise<Response>{
    const images = await Image.find();
    
    return res.json(images);
}