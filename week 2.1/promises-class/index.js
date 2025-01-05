// function waitfor3s(resolve){
//     setTimeout(resolve,3000)

// }
// function main(){
//     console.log("main is called")
// }
// waitfor3s(main);



function random(resolve){
    setTimeout(resolve,3000);

}
const p = new Promise(random);
function callback(){
    console.log("promised succede")
}
p.then(callback)