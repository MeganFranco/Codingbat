//Given a string and a non-negative int n, we'll say that the front of the string is the first 3 chars, or whatever is there if the string is less than length 3. Return n copies of the front;
//
//frontTimes("Chocolate", 2) → "ChoCho"
//frontTimes("Chocolate", 3) → "ChoChoCho"
//frontTimes("Abc", 3) → "AbcAbcAbc"

function frontTimes(givenStr, n){
    var frontStr = givenStr.slice(0, 3);
    var finalStr = "";
    for(var i = 0; i < n ; i++){
        
        finalStr = finalStr + frontStr;
    }
    console.log(finalStr)
}

frontTimes("Chocolate", 2)
frontTimes("Chocolate", 3)
frontTimes("Abc", 3)
frontTimes("Me", 3)

