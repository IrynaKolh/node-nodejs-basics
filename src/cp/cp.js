import { fork } from 'child_process';
import { fileURLToPath } from 'url';
import { stdin, stdout, argv } from 'process';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToScript = path.join(__dirname, 'files', 'script.js');

export const spawnChildProcess = async (args) => {
  const childProcess = fork(pathToScript, args.slice(2), { silent: true });
  stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(stdout);
};

spawnChildProcess(argv);



// cp.js - implement function spawnChildProcess that receives array of arguments args 
// and creates child process from file script.js, passing these args to it. 
// This function should create IPC-channel between stdin and stdout of master process and child process:
// child process stdin should receive input from master process stdin
// child process stdout should send data to master process stdout
