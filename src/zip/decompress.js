import * as path from 'path';
import { createUnzip } from 'node:zlib';
import { createWriteStream, createReadStream } from 'fs';
import { pipeline } from 'stream';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const sourseWay = path.join(__dirname, 'files', 'archive.gz');
  const unzipWay = path.join(__dirname, 'files', 'fileToCompress.txt');

  const input = createReadStream(sourseWay);
  const output = createWriteStream(unzipWay);
  const gzip = createUnzip();

  pipeline(input, gzip, output, (error) => {
    if (error) {
      throw new Error(error);
    }
  });
  console.log('File have been decompressed');
};

decompress();


// decompress.js - implement function that decompresses archive.gz back to the 
// fileToCompress.txt with same content as before compression using zlib and Streams API