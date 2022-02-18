let operator = {
  holder: [],
  //legger til de png-ene som blir vist til brukeren, når de trykker lagre, så blir den lagt til inventoryen
  add: function () {
    operator.valider(() => numbers.push(inputValue));
    show();
  },
  remove: function () {
    numbers.splice(chosenBar - 1, 1);
    chosenBar = null;
    buttonBool = true;
    show();
  },
  change: function () {
    operator.valider(() => numbers.splice(chosenBar - 1, 1, inputValue));
  },
  valgtSøyle: function (søyleID) {
    chosenBar = chosenBar === søyleID ? null : søyleID;
    buttonBool = !chosenBar;
    error = false;
    show();
  },
  valider: function valider(halt) {
    if (inputValue >= 1 && inputValue <= 10) {
      halt();
      error = false;
    } else {
      error = true;
    }
    inputValue = 0;
    show();
  },
};
