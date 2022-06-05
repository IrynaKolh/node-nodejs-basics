import * as fs from 'node:fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

export const remove = async () => {
    // Write your code here 
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    try {
        fs.unlink(
            path.join(__dirname, 'files', 'fileToRemove.txt'),
            error => {
                if (error) throw new Error('FS operation failed');            
            }
        )
    } catch (error) {
        throw new Error('FS operation failed');  
    }
};
remove();
