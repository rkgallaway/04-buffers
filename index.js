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

let articleOpen = new Buffer('<article>');
let articleClose = new Buffer('</article>');
let hTwoOpen = new Buffer('<h2');
let hTwoClose = new Buffer('</h2');
let hThreeOpen = new Buffer('<h3');
let hThreeClose = new Buffer('</h3>');
let ulOpen = new Buffer('<ul>');
let ulClose = new Buffer('</ul>');
let liOpen = new Buffer('<li>');
let liClose = new Buffer('</li>');


let parsedData = [];


fs.readFile( './files/pair-programming.txt', (err, data) => {
  let bufferConcat = [articleOpen, data, articleClose];
  parsedData.push(data.slice(0x5c));
  console.log(parsedData);
  if(err) { throw err; }
  fs.writeFile('./files/pair-programming.html', bufferConcat, err => {
    if (err) {throw err;}
    console.log('article created');
  });
});
