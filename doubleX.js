//Given a string, return true if the first instance of "x" in the string is immediately followed by another "x".
//
//doubleX("axxbb") → true
//doubleX("axaxax") → false
//doubleX("xxxxx") → true

function doubleX(givenString) {
    for (var i = 0; i < givenString.length; i++){
        if(givenString[i] === 'x' && givenString[i + 1] === 'x') {
            
            console.log(true);
        } else {
            
            console.log(false);
        }
       
    }

}

doubleX("axxbb");