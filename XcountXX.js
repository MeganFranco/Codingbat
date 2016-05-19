
//Count the number of "xx" in the given string. We'll say that overlapping is allowed, so "xxx" contains 2 "xx".
//
//countXX("abcxx") → 1
//countXX("xxx") → 2
//countXX("xxxx") → 3

function countXX(givenStr){
   for(var i = 0; i < givenStr.length; i++){
        var returnNum = 0
        
        if (givenStr.slice(i, i + 1) == "xx"){
            console.log(givenStr[i])
            returnNum = returnNum + 1;
        } else {
            continue;
        }
       console.log(givenStr[i])
        
    }
    console.log(returnNum);
}

countXX("abcxx")
//countXX("xxx")
//countXX("xxxx") 