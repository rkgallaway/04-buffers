'use strict';

const fs = require('fs');

class CodeGenereator {

  constructor(code){
    this.code = code;
    this.Buffer = Buffer.from('');
  }

  addCharacter(char){
    let newBuffer = Buffer.from(char);
    this.buffer = Buffer.concat([this.buffer, newBuffer]);
  }

  generate(){
    this.code.split('').forEach(char => {this.addCharacter(char);})
  }
}

let rawCode = "'use stirct'; let arr = [1,2,3]; for(let num of arr){console.log(num); }";

let code = new CodeGenereator(rawCode);
code.generate();

fs.writeFile('./loop.js', code.buffer, (err,data)=>{
  if(err){throw err;}
  console.log('Created loop.js');
});
