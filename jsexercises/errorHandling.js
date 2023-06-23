function addTwoNums(a, b) {
  try {
    if (typeof a != "number") {
      throw ReferenceError("the first argument is not a number");
    } else if (typeof b != "number") {
      throw ReferenceError("the second argument is not a number");
    } else {
      console.log(a + b);
    }
  } catch (err) {
    console.log("Error!", err);
  }
  console.log("type of ", a.typeof);
}

addTwoNums(5, "5");

console.log("Code Still works.");
