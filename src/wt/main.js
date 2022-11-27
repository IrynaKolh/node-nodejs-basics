import { Worker } from 'worker_threads';
import { fileURLToPath } from 'url';
import os from 'os';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathToWorker = path.join(__dirname, 'worker.js');

export const performCalculations = async () => {
  const cp = os.cpus();
  let cpNumber = 10;
  const resultsFromWT = await Promise.allSettled(cp.map(() => {
    return new Promise((res, rej) => {
        const worker = new Worker(pathToWorker, {
            workerData: cpNumber++
        })
        worker.on('message', msg => res(msg))
        worker.on('error', msg => rej(msg))
    })
  }))

  const result = resultsFromWT.map((thread) => ({
    status: thread.status === 'fulfilled' ? 'resolved' : 'error',
    data: thread.status === 'fulfilled' ? thread.value : null
  }))
  console.log(result);
  return result;
};
performCalculations();



// main.js - implement function that creates number of worker threads 
// (equal to the number of host machine logical CPU cores) from file worker.js 
// and able to send data to those threads and to receive result of the computation from them. 
// You should send incremental number starting from 10 to each worker. 
// For example: on host machine with 4 cores you should create 4 workers and send 10 to first worker, 
// 11 to second worker, 12 to third worker, 13 to fourth worker. After all workers will finish, 
// function should log array of results into console. The results are array of objects with 2 properties:

//     status - 'resolved' in case of successfully received value from worker or 'error' in case of error in worker
//     data - value from worker in case of success or null in case of error in worker

