const {readFileSync, writeFileSync} = require('fs');

console.log('Starting');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second);

writeFileSync(
    './content/result.txt', 
    `Her is the result: ${first}, ${second}`, 
    {flag: 'a'}
)
console.log('ending task');

console.log('starting new taks');