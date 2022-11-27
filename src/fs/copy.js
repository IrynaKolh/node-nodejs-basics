import * as fs from 'node:fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

export const copy = async () => {
    // Write your code here
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const destinationWay = path.join(__dirname, 'files-copy');
    const sourceWay = path.join(__dirname, 'files');   
    const errMsg = 'FS operation failed';  
    
    try {
       await fs.mkdir(destinationWay);   
       const fileNames = await fs.readdir(sourceWay, { withFileTypes: true});
       for (let file of fileNames) {
        await fs.copyFile(
          path.join(sourceWay, file.name),
          path.join(destinationWay, file.name)
        );
      }
    } catch (error) {
        throw new Error(errMsg);
    }
};

copy();

// copy.js - implement function that copies folder files files with all its content into folder files_copy at the same level 
// (if files folder doesn't exists or files_copy has already been created Error with message FS operation failed must be thrown)