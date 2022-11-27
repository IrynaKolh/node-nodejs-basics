import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import * as path from 'path';

export const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const sourceWay = path.join(__dirname, 'files', 'fileToRead.txt'); 

  const stream = createReadStream(sourceWay, 'utf-8');
  let data = '';

  stream.on('data', (chunk) => (data += chunk));
  stream.on('end', () => {
    stdout.write(data);
  });
  stream.on('error', (error) => {
    throw new Error(error);
  });
};

read();

// read.js - implement function that reads file fileToRead.txt content using Readable Stream and prints it's content into process.stdout