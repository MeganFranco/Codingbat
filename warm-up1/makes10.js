//Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.
//
//makes10(9, 10) → true
//makes10(9, 9) → false
//makes10(1, 9) → true

function makes10(a, b){
    if(a == 10 || b == 10){
        console.log(true);
    } else if(a + b == 10) {
        console.log(true)
    } else {
        console.log(false);
    }
}

makes10(9, 10);
makes10(9, 9);
makes10(1, 9);