import app from './app';
import { startCOnnection } from './database';


async function main (){
    await startCOnnection();
    await app.listen(3000);
    console.log('Server on port', 3000)
}

main();

