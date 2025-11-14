let inputTemi = document.getElementById("time");
let count = 60
let audion = document.getElementById("audio")
let stopbtn = document.getElementById("stopbtn")
let continurbtn = document.getElementById("continur")

    

let sekudamer = setInterval(() => {
    let date = new Date();
    
    let timemer = date.toLocaleTimeString("it-IT");    
    let currentTime = timemer.split(":").splice(0,2).join(":")
    console.log(currentTime);
    
    if (inputTemi.value === currentTime){
        audio.play()
    }
} , 1000)

stopbtn.addEventListener("click", function () {
    clearInterval(sekudamer)
    audio.pause()
})
continurbtn.addEventListener("click" , function(){
    audio.play()
})
