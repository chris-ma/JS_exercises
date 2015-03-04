function isEven(number) {
  if (number == 0) {
    console.log("even");
  } else if (number == 1) {
    console.log("odd");
  } else {
    isEven(number - 2);
  }
  return isEven;
}

console.log(isEven(-2));