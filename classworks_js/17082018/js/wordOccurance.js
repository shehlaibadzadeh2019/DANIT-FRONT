//Create a function countWords(sentence) that gets a sentence and prints to the  console the number of occurrences of each word in the sentence
//For instance:
//function countWords(sentence) {
//// your code
//}
//
//let sentence = "John the second is the son of John the first,  while the second son of John the second is William the  second.";
//countWords(sentence);

function countWords(sentence) {
    let m = new Map();
    return sentence.replace(",", "").split(" ").forEach(el => m.set(el));
}

let sentence = "John the second is the son of John the first,  while the second son of John the second is William the  second.";

console.log(countWords(sentence));

//el.split(":")[0], m.get(el.split(":")[0]++)