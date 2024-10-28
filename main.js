console.log("Hello node js")

//using _ and caps lock to highlitght that they're vars from terminal
const _PIN = process.env.PIN;


console.log(`Argv elements: ${process.argv.slice(2)}`);

console.log(`PIN: ${_PIN}`);
