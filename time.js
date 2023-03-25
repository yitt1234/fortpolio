
//console.log(time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds())


function timf() {
    const babo = document.getElementById("time")
    const boba = document.getElementById("day")
    const y = document.getElementById("year")
    var time;
    time = new Date()
const a = time.getHours();
const b = time.getMinutes(); 
const c = time.getDay();
const d = time.getFullYear()


if(c === 1){
    boba.innerHTML = "Monday"
}
if(c === 2){
    boba.innerHTML = "Tuesday"
}

if(c === 3){
    boba.innerHTML = "Wednesday"
}

if(c === 4){
    boba.innerHTML = "Thursday"
}
if(c === 5){
    boba.innerHTML = "Friday"
}
if(c === 6){
    boba.innerHTML = "Saturday"
}
if(c === 7){
    boba.innerHTML = "Sunday"
}


y.innerHTML = d
babo.innerHTML = a + ':' + b
 
if(b == 0) {
    babo.innerHTML = a + ':' + b + '0'
    if(a < 12){
        babo.innerHTML = a + ':' + b + '0' + ' AM'
    }
    if( a > 11 && a < 24){
        babo.innerHTML = a + ':' + b + '0' + ' PM'
    }
}
if(0 < b < 10){
    babo.innerHTML = a + ':' + '0' + b
    if(a < 12){
        babo.innerHTML = a + ':' + '0' + b + ' AM'
    }
    if( a > 11 && a < 24){
        babo.innerHTML = a + ':' + '0' + b + ' PM'
    }
}
if(b > 9){
    babo.innerHTML = a + ':' + b
    if(a < 12){
        babo.innerHTML = a + ':' + b +  ' AM'
    }
    if( a > 11 && a < 24){
        babo.innerHTML = a + ':' + b + ' PM'
    }
}

}
setInterval(timf, 1000)

