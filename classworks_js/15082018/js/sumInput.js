//Write a function sumInput() that:
//Asks the user for values using prompt and stores the values in the array
//Finishes asking when the user enters a non-numeric value, an empty string, or presses  “Cancel”
//Calculates and returns the sum of array items

function sumInput(invitation) {
    return getUsrPrompt(invitation).reduce((accumulator, el) => accumulator + el);
}

function getUsrPrompt(invitation) {
    let nums = [];
    let newInput;
    while ((newInput = prompt(invitation)) !== null) {
        if (newInput = Number(newInput)) {
            nums.push(newInput);
            console.log("Input has been accpeted. Current operands are: " + nums)
        }else {
            console.error("Input has been ignored: " + newInput)
        }
    }
    return nums;
}

function outputResult(res){
    console.log("Summ is: " + res);
}

outputResult(sumInput("Please enter a number to summ. Press cancell to finish entering numbers..."));