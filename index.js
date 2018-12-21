'use strict';

const fs = require('fs');

let bufferOne = new Buffer('\'use strict\';\n');
let bufferTwo = new Buffer('let group = [\'Ryan\', \'Heather\', \'Brent\', \'Siobhan\', \'Becca\'];\n');
let bufferThree = new Buffer('group.forEach(name => {');
let bufferFour = new Buffer('console.log(name);');
let bufferFive = new Buffer('});');

let arr = [bufferOne, bufferTwo, bufferThree, bufferFour, bufferFive];

let finalBuffer = Buffer.concat(arr);


fs.writeFile('./files/loop.js', finalBuffer , err => {
  if (err) {throw err; }
  console.log('something has been made');
});

// 'use strict';\n

let group = ['Ryan', 'Heather', 'Brent', 'Siobhan', 'Becca'];

group.forEach( name =>{
  console.log(name);
});
