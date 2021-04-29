var main = function (input) {
  return outlineSquare(input);
};

var outlineSquare = function (input) {
  var myOutputValue = "";
  for (var counter = 0; counter < input; counter += 1) {
    for (var counter2 = 0; counter2 < input; counter2 += 1) {
      if (
        counter == 0 ||
        counter == input - 1 ||
        counter2 == 0 ||
        counter2 == input - 1
      )
        myOutputValue += `👍`;
      else {
        myOutputValue += `👏`;
      }
    }
    myOutputValue += `<br>`;
  }
  return myOutputValue;
};

var triangle = function (input) {
  var myOutputValue = "";
  for (var counter = 0; counter < input; counter += 1) {
    for (var counter2 = 0; counter2 <= counter; counter2 += 1) {
      myOutputValue += `👍`;
    }
    myOutputValue += `<br>`;
  }
  return myOutputValue;
};

var square = function (input) {
  var myOutputValue = "";
  for (var counter = 0; counter < input; counter += 1) {
    for (var counter2 = 0; counter2 < input; counter2 += 1) {
      myOutputValue += `👍`;
    }
    myOutputValue += `<br>`;
  }
  return myOutputValue;
};
