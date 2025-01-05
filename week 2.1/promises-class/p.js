const fs = require("fs");
function readTheFile(sendTheFinalvaluehere ){
    fs.readFile("A.txt","utf-8",function(err,data){
        sendTheFinalvaluehere(data);
    })

}
function readFile(fileName){
    return new Promise(readTheFile)
}
const p = readFile();
function callback(contents){
    console.log(contents);
}
p.then(callback)