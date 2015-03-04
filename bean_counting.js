var string = "";
var numOfLetter = 0;

function countBs(string) {
  splitString = string.split("");
  for (var i = 0; i < splitString.length; i++){
    if (i == "B") {
      numOfLetter += 1
    }
  }
  return numOfLetter
}

console.log(countBs("Brother"));
// console.log(numOfLetter);