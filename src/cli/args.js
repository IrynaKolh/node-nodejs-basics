export const parseArgs = () => {
    // Write your code here 
   const userInput = process.argv.slice(2);

   const cliArgs = userInput.reduce((acc, arg, index, arr) => {
    const currValue = arr[index + 1];
    if (currValue && arg.startsWith('--')) {
        const resultArgs = arg.slice(2);
        const result = `${resultArgs} is ${currValue}`;
        acc.push(result);
    }
    return acc;
   }, []);

   console.log(cliArgs.join(', '));
};
parseArgs();

// args.js - implement function that parses command line arguments 
// (given in format --propName value --prop2Name value2, you don't need to validate it) 
// and prints them to the console in the format propName is value, prop2Name is value2
