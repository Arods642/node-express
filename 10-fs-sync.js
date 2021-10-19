const { readFileSync, writeFileSync } = require('fs');
console.log('start');

// reading the file
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');


// writing the file.
writeFileSync(
    './content/result-sync.txt',
    `Here is the results : ${first}, ${second}`,
    // the flag appends the text writing. 
    { flag: 'a'}
)

console.log(first, second);
console.log('done with this task');
console.log('Starting the next one.');