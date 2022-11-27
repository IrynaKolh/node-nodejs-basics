import { Transform, pipeline } from 'node:stream';
import { stdin, stdout } from 'node:process';

const reverseString = new Transform({
  transform(chunk, encoding, callback) {
    const result = chunk.toString().trim().split('').reverse().join('');
    callback(null, result + '\n');
  },
});

export const transform = async () => {
  pipeline(stdin, reverseString, stdout, (error) => {
    if (error) {
      throw new Error(error);
    }
  });
};

transform();


// transform.js - implement function that reads data from process.stdin, reverses text using Transform Stream and then writes it into process.stdout