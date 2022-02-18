const contentDiv = document.getElementById("content");
function chart(chosenBar, numbers) {
  this.numbers = [7, 3, 1, 5, 8];
  this.chosenBar = 0;
  this.inputValue;
}
chartOne = new chart("[7, 3, 1, 5, 8]", "0", "0");
numbers = chartOne.numbers;
chosenBar = chartOne.chosenBar;
buttonBool = true;
error = false;
