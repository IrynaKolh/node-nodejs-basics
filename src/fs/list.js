import * as fs from 'node:fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

export const list = async () => {
    // Write your code here 
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const fileWay = path.join(__dirname, 'files');
    try {
        fs.readdir(fileWay, (err, files) => {
            if (err) throw new Error('FS operation failed');
            files.forEach((file) => {
                fs.stat(path.join(fileWay, `/${file.name}`), (err, stats) => {
                    if (err) throw new Error('FS operation failed');
                    if (file.isFile()) {
                      const type = path.extname(file.name);
                      const name = path.basename(file.name, type);      
                      console.log(`${name}.${type}`);
                    }
                  });
            });
          });
    } catch (err) {
        throw new Error('FS operation failed');
    }
};
list();

