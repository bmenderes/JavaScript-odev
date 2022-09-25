let clock = document.querySelector("#myClock")

setInterval(updateTime, 1000);

function updateTime(){
    var currentdate = new Date();
    var datetime = currentdate.getDate() + "/"
    + (currentdate.getMonth()+1)  + "/" 
    + currentdate.getFullYear() + " @ "  
    + currentdate.getHours() + ":"  
    + currentdate.getMinutes() + ":" 
    + currentdate.getSeconds();
     clock.innerHTML = datetime
}


