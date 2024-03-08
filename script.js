let numbers = document.getElementsByClassName("number");
let submit = document.getElementsByClassName("submit")[0];
let rate = 0;

for (let index = 0; index < numbers.length; index++) {
  setRate(index);
}

submit.onclick = () => {
  if (rate === 0) return;
  let cards = document.getElementsByClassName("card");
  cards[0].setAttribute("active", "false");
  cards[1].setAttribute("active", "true");
  document.getElementsByClassName(
    "rate-result"
  )[0].textContent = `You selected ${rate} out of 5`;
};

function setRate(index) {
  numbers[index].onclick = () => {
    let removeThis = numbers[index].getAttribute("selected") !== null;
    for (let index2 = 0; index2 < numbers.length; index2++) {
      numbers[index2].removeAttribute("selected");
    }
    if (!removeThis) {
      numbers[index].setAttribute("selected", true);
      rate = numbers[index].textContent ?? 0;
    } else {
      rate = 0;
    }
  };
}
