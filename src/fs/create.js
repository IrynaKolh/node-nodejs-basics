import * as fs from 'node:fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

export const create = async () => {
    // Write your code here   
    let content = 'I am fresh and young';
    const errMsg = 'FS operation failed';
        
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = path.join(__dirname, 'files', 'fresh.txt');

    try {
        await fs.writeFile(filePath, content, {flag: 'wx'});          
    } catch (err) {       
        throw new Error (errMsg);
    }
};
create();

// create.js - implement function that creates new file fresh.txt 
// with content I am fresh and young inside of the files folder 
// (if file already exists Error with message FS operation failed must be thrown)