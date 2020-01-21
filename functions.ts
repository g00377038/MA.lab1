function countLetters(myString: string): number 
{
    return myString.length;
}

function countLettersMinusBlanks(myString: string): number 
{
    return myString.replace(/\s/g, "").length;
}

//? used for optional parameter
function countLettersChoice(myString: string, myChoice?: boolean): number 
{
    if(myChoice==true)
    {
        return myString.length;
    } 

    else if(myChoice==false)
    {
        return myString.replace(/\s/g, "").length;
    } 
}

let myString: string = "Test 1";
let numOfLetters: number = countLetters(myString);
let numOfLettersMinusBlanks: number = countLettersMinusBlanks(myString);
let choice1: boolean = true;
let choice2: boolean = false;

console.log(numOfLetters);
console.log(numOfLettersMinusBlanks);

console.log(countLettersChoice(myString, choice1));
console.log(countLettersChoice(myString, choice2));

