import * as path from 'path';
import { createGzip } from 'node:zlib';
import { createWriteStream, createReadStream } from 'fs';
import { pipeline } from 'stream';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const sourseWay = path.join(__dirname, 'files', 'fileToCompress.txt');
  const zipWay = path.join(__dirname, 'files', 'archive.gz');

  const input = createReadStream(sourseWay, 'utf-8');
  const output = createWriteStream(zipWay);
  const gzip = createGzip();

  pipeline(input, gzip, output, (error) => {
    if (error) {
      throw new Error(error);
    }
  });
  console.log('File have been compressed');
};

compress();


// compress.js - implement function that compresses file fileToCompress.txt to archive.gz using zlib and Streams API