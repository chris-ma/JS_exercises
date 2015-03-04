function range(start, end, step) {
  var myArray = [];  
  for (var i = start; i <= end; i=i+step) {
    myArray.push(i);
  }
  return myArray;
}

var sampleRange = range(1,10,2);
console.log(sampleRange);

function sum(array) {
  var counter = 0
  for (var i = 0; i < array.length; i++) {
    counter += array[i]
  }
  return counter;
}

console.log(sum(sampleRange))