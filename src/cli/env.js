export const parseEnv = () => {
    // Write your code here 
    const {stdout, stdin, exit} = process;
    stdout.write('Enter 2 variables with prefix RSS_ in format variable_name=variable_value \n');
    stdin.on('data', data => {
        const values = data.toString().split(' ');
        stdout.write(`${values[0]} ; ${values[1]}`);
        process.exit();
    });
    process.on('SIGINT', () => {  
        process.stdout.write('Buy!');
        process.exit();
    });
};
parseEnv();

// env.js - implement function that parses environment variables with prefix RSS_ 
// and prints them to the console in the format RSS_name1=value1; RSS_name2=value2

// "env": "npx cross-env RSS_name=Ira RSS_name=Olya node src/cli/env.js",


//  for check ipmlementation print    ----->>>>         RSS_name=Ira RSS_name=Olya