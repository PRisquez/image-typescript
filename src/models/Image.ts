import { Schema, model, Document} from 'mongoose';

interface IImage extends Document {
    title: string;
    description: string;
    imagePath: string;
}

const photoSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    imagePath:{
        type: String
    }
})

export default model<IImage>('Photo', photoSchema)