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