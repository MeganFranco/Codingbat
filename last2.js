//Given a string, return the count of the number of times that a substring length 2 appears in the string and also as the last 2 chars of the string, so "hixxxhi" yields 1 (we won't count the end substring).
//
//last2("hixxhi") → 1
//last2("xaxxaxaxx") → 1
//last2("axxxaaxx") → 2

function last2(givenString) {    
    var startNumber = givenString.length - 2;
    var endString = givenString.substring(startNumber, givenString.length);
    var numberRepeat = 0;

    
    for (var i = 0; i < givenString.length; i++){
//        console.log(i, i + 2)
        
        if(givenString.substring(i, i + 2) === endString) {
            numberRepeat = numberRepeat + 1
        }
       
    }
     console.log(numberRepeat - 1)

    

}

last2("hixxhi") 
last2("xaxxaxaxx")
last2("axxxaaxx") 