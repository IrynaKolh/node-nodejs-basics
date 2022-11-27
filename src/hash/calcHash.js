import crypto from 'crypto';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import * as path from 'path';
import { dirname } from 'node:path';

export const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const file = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

  try {
    const text = await fs.readFile(file, { encoding: 'utf8' });
    const result = crypto.createHash('sha256').update(text).digest('hex');
    console.log(result);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

calculateHash();


// calcHash.js - implement function that calculates SHA256 hash for file fileToCalculateHashFor.txt and logs it into console as hex
