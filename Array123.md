
//Given an array of ints, return true if .. 1, 2, 3, .. appears in the array somewhere.
//
//array123([1, 1, 2, 3, 1]) → true
//array123([1, 1, 2, 4, 1]) → false
//array123([1, 1, 2, 1, 2, 3]) → true

function array123(arrayOfInts){
    for(var i = 0; i < arrayOfInts.length; i++) {
        if(charAt(arrayOfInts[i]) === 1 && charAt(arrayOfInts[i + 1]) === 2 && charAt(arrayOfInts[i + 2]) === 3) {
            console.log(true)
        } else {
            console.log(false)
        }
    }
    
}

array123([1, 1, 2, 1, 2, 3])
array123([1, 1, 2, 4, 1])
array123([1, 1, 2, 1, 2, 3])
