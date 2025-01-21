 var timer = 60;

function getNewhit(){
    var rn = Math.floor(Math.random() * 10 )
    document.querySelector("#hitval").textContent = rn
}



function makebubble(){
    var clutter = "";

for( var i=1; i<=162;i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`
}
document.querySelector("#pbtm").innerHTML = clutter

}
function runtime(){
    var timerint = setInterwal(function(){
        if(timer >0){
            timer--;
            document.querySelector("#timerval").textContent = timer;

        }else{
            clearInterval(timerint);
        }
        
    },1000);
}

makebubble();
runtime();
getNewhit();


