var istatus = document.querySelector("h5")
var btn = document.querySelector("#Add")
var check = 0;



// removeFriend.addEventListener("click", function(){
//     istatus.innerHTML = "stranger"
//     istatus.style.color = "red"
// })




btn.addEventListener("click", function(){
    if(check == 0){
        istatus.innerHTML ="Friends"
        istatus.style.color = "green"
        btn.innerHTML = "Remove Friend"
        check =1


    }else{
        istatus.innerHTML = "stranger"
        istatus.style.color = "red"
        btn.innerHTML = "Add Friend"
        check = 0

    }
    

});


