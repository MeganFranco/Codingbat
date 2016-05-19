//Given an int n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21.
//
//diff21(19) → 2
//diff21(10) → 11
//diff21(21) → 0

function diff21(n){
    if(n < 21){
        console.log(Math.abs(n - 21))
    } else { 
        var doubleMe = Math.abs(n - 21)
        console.log(doubleMe * 2)
       }
}

diff21(19);
diff21(10);
diff21(21);
diff21(25);