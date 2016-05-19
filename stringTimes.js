//Given a string and a non-negative int n, return a larger string that is n copies of the original string.
//
//stringTimes("Hi", 2) → "HiHi"
//stringTimes("Hi", 3) → "HiHiHi"
//stringTimes("Hi", 1) → "Hi

function stringTimes(givenstr, n) {
    var endString = "";
    for(var i = 0; i < n; i ++){
        endString = endString + givenstr
    }
    console.log(endString)
}

stringTimes("Hi", 2)
stringTimes("Hi", 3)
stringTimes("Hi", 1)