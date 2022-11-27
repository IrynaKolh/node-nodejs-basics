import * as fs from 'node:fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

export const list = async () => {
    // Write your code here 
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const sourceWay = path.join(__dirname, 'files');
    const errMsg = 'FS operation failed';  

    try {
        const filesNames = await fs.readdir(sourceWay, { withFileTypes: true });
        filesNames.forEach(file => console.log(file.name));
    } catch (err) {
        throw new Error(errMsg);
    }
};
list();

// list.js - implement function that prints all array of filenames from files folder into console 
// (if files folder doesn't exists Error with message FS operation failed must be thrown)

