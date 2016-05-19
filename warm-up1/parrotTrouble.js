//We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23. We are in trouble if the parrot is talking and the hour is before 7 or after 20. Return true if we are in trouble.
//
//parrotTrouble(true, 6) → true
//parrotTrouble(true, 7) → false
//parrotTrouble(false, 6) → false

function parrotTrouble(talking, hour){
    if(talking == true){
        if(hour > 20 || hour < 7){
            console.log(true);
        } else {
            console.log(false);
        } 
    } else {console.log(false);
        }
}

parrotTrouble(true, 6)
parrotTrouble(true, 7) 
parrotTrouble(false, 6)
parrotTrouble(true, 21)