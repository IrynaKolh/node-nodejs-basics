import * as fs from 'node:fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

export const rename = async () => {
    // Write your code here 
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const errMsg = 'FS operation failed';  

    try {
        await fs.rename(
            path.join(__dirname, 'files', 'wrongFilename.txt'),
            path.join(__dirname, 'files', 'properFilename.md'),
        )        
    } catch (error) {
        throw new Error(errMsg);
    }    
};
rename();

// rename.js - implement function that renames file wrongFilename.txt to properFilename with extension .md 
// (if there's no file wrongFilename.txt or properFilename.md already exists Error with message FS operation failed must be thrown)