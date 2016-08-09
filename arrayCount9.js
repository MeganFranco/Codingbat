//Given an array of ints, return the number of 9's in the array.
//
//arrayCount9([1, 2, 9]) → 1
//arrayCount9([1, 9, 9]) → 2
//arrayCount9([1, 9, 9, 3, 9]) → 3

function arrayCount9(arrayOfNums){
    arrayCount = 0;
    for(var i = 0; i < arrayOfNums.length ; i++){
        
        if(arrayOfNums[i] == 9){
            arrayCount = arrayCount + 1;
    }
        }
    console.log(arrayCount)
}
    


arrayCount9([1, 2, 9]) 
arrayCount9([1, 9, 9]) 
arrayCount9([1, 9, 9, 3, 9]) 
