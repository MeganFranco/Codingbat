//Given two int values, return their sum. Unless the two values are the same, then return double their sum.
//
//sumDouble(1, 2) → 3
//sumDouble(3, 2) → 5
//sumDouble(2, 2) → 8

function sumDouble (num1, num2) {
    if(num1 !== num2) {
       console.log(num1 + num2)
    } else {
        console.log((num1 + num2) * 2)  
    }
    
}

sumDouble(1, 2)
sumDouble(3, 2)
sumDouble(2, 2)