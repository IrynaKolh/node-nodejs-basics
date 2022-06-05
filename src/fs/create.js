import * as fs from 'node:fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

export const create = async () => {
    // Write your code here   
    let content = 'I am fresh and young';
        
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = path.join(__dirname, 'files', 'fresh.txt');
    try {
        fs.writeFile(filePath, content, {flag: 'wx'}, (err) => {
            if (err) {
                throw new Error ('FS operation failed');
            } 
            console.log('File is created successfully.');              
        });          
    } catch (err) {       
        throw new Error ('FS operation failed');
    }
};
create();