//
//Given 2 strings, a and b, return the number of the positions where they contain the same length 2 substring. So "xxcaazz" and "xxbaaz" yields 3, since the "xx", "aa", and "az" substrings appear in the same place in both strings.
//
//stringMatch("xxcaazz", "xxbaaz") → 3
//stringMatch("abc", "abc") → 2
//stringMatch("abc", "axc") → 0

function stringMatch(string1, string2){
    
    var count = 0;
    if(string1.length !== string2.lenght){
        var shortestString = Math.min(string1, string2);
          for(var i = 0; i < shortestString.length; i ++){
            var subString1 = string1.substring(i, i + 2);
            var subString2 = string2.substring(i, i +2);
                console.log(subString1)
                console.log(subString2)
              if(subString1 === subString2){
                    count = count + 1
              }
        }
    }else{
        for(var i = 0; i < string1.length; i++){
            var subString1 = string1.substring(i); //, i + 2
            var subString2 = string2.substring(i, i +2);
                console.log(subString1)
                console.log(subString2)
                if(subString1 === subString2){
                    count = count + 1
              }
        }
    }
    
//      console.log(count)
}


//stringMatch("xxcaazz", "xxbaaz")
stringMatch("abc", "abc") 
//stringMatch("abc", "axc") 