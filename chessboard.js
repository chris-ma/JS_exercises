

var size = 8;
for (var i = 0; i < size; i++) {
  var line = "";
  //creates a new row for every value of i
  for (var j = 0; j < size; j++) {
    var total = i + j;
    if (total % 2 == 0) { 
      line += '#';
    } else {
      line += ' ';
    }
  }
  console.log(line);
}
