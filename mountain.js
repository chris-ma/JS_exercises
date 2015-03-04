var landscape = function() {
  //set result to an exmpty string this will be your blank canvas for a landscape
  var result = "";
  //the function below will create a sequence of flats __
  var flat = function(size) {
    for (var count = 0; count < size; count++ ) {
      result += "_";
    }
  };

  // the function below will create the hills
  var mountain = function(size) {
    result += "/";
    for (var count = 0; count < size; count ++){
      result += "'";
    }
    result += "\\";
  };

  flat(3);
  mountain(4);
  flat(6);
  mountain(1);
  flat(1);
  return result;
};

 console.log(landscape());

// NOTES ==================
// the flat and mountain functions can see a variable called result
// flat and mountain cannot see each others local variables
// anything outside of landscape will not see these variables
