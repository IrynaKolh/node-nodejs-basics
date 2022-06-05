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
    
    
    try {
        fs.mkdir(destinationWay, {recursive: true}, () => {
            fs.readdir(sourceWay, (err) => {
            if (err) {
                console.log(err);
            } else {        
                copyFiles();              
            }      
            });
        });
           
          
          function copyFiles() {
            fs.readdir(sourceWay, { withFileTypes: true }, (err, files) => {
              if (err) {
                console.error(err);
              } else {
                files.forEach((file) => {
                  let sourceFile = path.join(sourceWay, file.name);
                  let copyFile = path.join(destinationWay, file.name);  
                  fs.copyFile(sourceFile, copyFile);        
                });
              }
            });
          }
    } catch (error) {
        console.log ('FS operation failed');
    }
};

copy();

