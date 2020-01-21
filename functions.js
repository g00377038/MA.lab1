function countLetters(myString) {
    return myString.length;
}
function countLettersMinusBlanks(myString) {
    return myString.replace(/\s/g, "").length;
}
//? used for optional parameter
function countLettersChoice(myString, myChoice) {
    if (myChoice == true) {
        return myString.length;
    }
    else if (myChoice == false) {
        return myString.replace(/\s/g, "").length;
    }
}
var myString = "Test 1";
var numOfLetters = countLetters(myString);
var numOfLettersMinusBlanks = countLettersMinusBlanks(myString);
var choice1 = true;
var choice2 = false;
console.log(numOfLetters);
console.log(numOfLettersMinusBlanks);
console.log(countLettersChoice(myString, choice1));
console.log(countLettersChoice(myString, choice2));
