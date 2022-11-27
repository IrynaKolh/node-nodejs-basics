import { readFile } from 'fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';


export const read = async () => {
    // Write your code here 
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const fileToRead = path.join(__dirname, 'files', 'fileToRead.txt');
    const errMsg = 'FS operation failed';  

    try {
        const text = await readFile(fileToRead, 'utf8');
        console.log(text);
    } catch (error) {
        throw new Error(errMsg);
    }
};
read();

// read.js - implement function that prints content of the fileToRead.txt into console 
// (if there's no file fileToRead.txt Error with message FS operation failed must be thrown)