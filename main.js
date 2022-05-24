const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: fs.createReadStream('atq.md'),
    output: process.stdout,
    terminal: false
});

rl.on('line', (line) => {
    console.log(line);
});
