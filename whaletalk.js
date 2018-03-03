const input = "Sofia is ae Wale Watcher, watching Wales form the Beach";
const vowels = ["e", "a", "i", "o", "u"];
let resultArray = [];
for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  
  for (let vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++) {
    
    if (input[inputIndex] === vowels[vowelsIndex]) {
      resultArray.push(input[inputIndex])
  	}
 	}
  if (input[inputIndex] === 'e' || input[inputIndex] === "u" || input[inputIndex] === "a" || input[inputIndex] === "i" || input[inputIndex] === "o") {
    resultArray.push(input[inputIndex]);
  }

}
console.log(resultArray.join('').toUpperCase());
