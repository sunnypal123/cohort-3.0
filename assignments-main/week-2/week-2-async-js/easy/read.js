


const fs = require('fs');
fs.readFile('example.txt','utf8',(err,data) =>{
    if (err){
        console.error('Error raeding files:',err);
        return;
    }
    console.log('file contents:',data);
});

console.log('starting expensive operation...')
let sum = 0;
for (let i= 0; i <1e0; i++){
    sum +=i;
    console.log('expensive operarion compelted. sum:',sum)
}
