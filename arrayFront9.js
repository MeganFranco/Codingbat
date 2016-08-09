//
//Given an array of ints, return true if one of the first 4 elements in the array is a 9. The array length may be less than 4.
//
//arrayFront9([1, 2, 9, 3, 4]) → true
//arrayFront9([1, 2, 3, 4, 9]) → false
//arrayFront9([1, 2, 3, 4, 5]) → false

function arrayFront9(arrayOfInts){

    for(var i = 0; i < 3; i++){
    
        if(arrayOfInts[i] === 9){
            var nineInArray = true;    
        } else {
            var nineInArray = false;
        }
    }
    console.log(nineInArray);
}

//arrayFront9([1, 2, 9]) //true
//arrayFront9([1, 2, 5, 9]) //true
arrayFront9([1, 2, 9, 3, 4]) 
arrayFront9([1, 2, 3, 4, 9]) 
arrayFront9([1, 2, 3, 4, 5]) 