import * as fs from 'node:fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

export const rename = async () => {
    // Write your code here 
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    fs.rename(
        path.join(__dirname, 'files', 'wrongFilename.txt'),
        path.join(__dirname, 'files', 'properFilename.md'),
        err => {
            if (err) throw new Error('FS operation failed');
            console.log('Файл переименован');
        })
};
rename();