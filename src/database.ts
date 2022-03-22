import { connect } from 'mongoose';

export async function startCOnnection() {
    await connect('mongodb://localhost/image-gallery-db');
    console.log('Database is connected');
}