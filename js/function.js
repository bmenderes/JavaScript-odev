let firstName = prompt("Kullanici adini giriniz")
let myClock = document.querySelector("#myClock")

function greetings(){
   myClock.innerHTML = (`Merhaba ${firstName}`)
}

greetings()