//gekürzte Version

const cardholder = document.querySelector("#cardholder");
cardholder.addEventListener("input", (e) => {
  previewCardField(e.target.value, "Name", "#preview-cardholder");
});

const cardnumber = document.querySelector("#cardnumber");
cardnumber.addEventListener("input", (e) => {
  previewCardField(e.target.value, "000 1234 5678 9101", "#preview-cardnumber");
});

//CardName + CardNumber zusammengefasst!
function previewCardField(inputValue, defaultValue, previewSelector) {
  let currentValue = inputValue;
  if (currentValue === "") {
    currentValue = defaultValue;
  }
  const previewElement = document.querySelector(previewSelector);
  previewElement.innerText = currentValue;
}

//ausführliche Version
/*
//CardName
// abspeichern von eingabe(value) aus html-input
const cardholder = document.querySelector("#cardholder");
//funktion zur Eventerstellung
cardholder.addEventListener("input", (e) => {
  //
  let currentCardholder = e.target.value;
  
  //if-Abfrage ob Feld = leer. Wenn ja dann zurück zu placeholder!
  if(currentCardholder === ''){
    currentCardholder = 'Name';
  }
    const previewCardholder = document.querySelector("#preview-cardholder");
    previewCardholder.innerText = currentCardholder;
});


CardNumber
const cardnumber = document.querySelector("#cardnumber");
cardnumber.addEventListener("input", (e) => {
  let currentCardnumber = e.target.value;
  
  if(currentCardnumber === ''){
    currentCardnumber = '0000 1234 5678 9101';
  }
    const previewCardnumber = document.querySelector("#preview-cardnumber");
    previewCardnumber.innerText = currentCardnumber;
});
*/
