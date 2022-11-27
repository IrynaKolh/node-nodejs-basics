import * as fs from 'node:fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

export const remove = async () => {
    // Write your code here 
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const errMsg = 'FS operation failed';  

    try {
        await fs.rm(
            path.join(__dirname, 'files', 'fileToRemove.txt')          
        );
    } catch {
        throw new Error(errMsg);  
    }
};
remove();

// delete.js - implement function that deletes file fileToRemove.txt 
// (if there's no file fileToRemove.txt Error with message FS operation failed must be thrown)
