export const parseArgs = () => {
    // Write your code here 
    process.argv.forEach((name, index) => {
        if (index %2 ===0){
            name = name.slice(2);
            process.stdout.write(`${name}`);
            process.stdout.write(' is ');
        } else {
            process.stdout.write(`${name}`);
            console.log();
        }          
    });
};
parseArgs();
