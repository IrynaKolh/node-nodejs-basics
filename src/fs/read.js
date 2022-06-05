import * as fs from 'node:fs';
import * as path from 'path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';


export const read = async () => {
    // Write your code here 
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const file = path.join(__dirname, 'files', 'fileToRead.txt');
    const readableStream = fs.createReadStream(file, 'utf-8');
    const haddler = message => console.log(message.toString());
    readableStream.on('data',haddler);    
};
read();