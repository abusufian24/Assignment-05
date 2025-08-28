// heart count function

function incrementHeartCount() {
  const heartCount = document.getElementById("heart");
  let currentCount = parseInt(heartCount.innerText);
  let newCount = currentCount + 1;
  heartCount.innerText = newCount;
}

document
  .getElementById("cart-heart")
  .addEventListener("click", incrementHeartCount);

document
  .getElementById("cart-heart2")
  .addEventListener("click", incrementHeartCount);
document
  .getElementById("cart-heart3")
  .addEventListener("click", incrementHeartCount);

document
  .getElementById("cart-heart4")
  .addEventListener("click", incrementHeartCount);
document
  .getElementById("cart-heart5")
  .addEventListener("click", incrementHeartCount);

document
  .getElementById("cart-heart4")
  .addEventListener("click", incrementHeartCount);
document
  .getElementById("cart-heart6")
  .addEventListener("click", incrementHeartCount);

document
  .getElementById("cart-heart7")
  .addEventListener("click", incrementHeartCount);
document
  .getElementById("cart-heart8")
  .addEventListener("click", incrementHeartCount);
document
  .getElementById("cart-heart9")
  .addEventListener("click", incrementHeartCount);

// clear btn function

document.getElementById("clear-btn").addEventListener("click", function () {
  const historyPart = document.getElementById("history-part");
  historyPart.innerHTML = "";
});

// call btn function

function handleCall(message) {
  const coinElement = document.getElementById("coin");
  let coins = parseInt(coinElement.innerText);
  const callCost = 20;

  if (coins < callCost) {
    alert("Insufficient coins! Please recharge to make a call.");
    return;
  }

  coins -= callCost;
  coinElement.innerText = coins;
  alert(message);
  const historyPart = document.getElementById("history-part");
  historyPart.innerHTML += `<div>${message}</div>`;
}

document.getElementById("call-btn").addEventListener("click", function () {
  handleCall("National Emergency Number..999");
});

document.getElementById("call-btn2").addEventListener("click", function () {
  handleCall("Police Helpline Number..999");
});
document.getElementById("call-btn3").addEventListener("click", function () {
  handleCall("Fire Service Number..999");
});
document.getElementById("call-btn4").addEventListener("click", function () {
  handleCall("Ambulance Service..1994-999999");
});
document.getElementById("call-btn5").addEventListener("click", function () {
  handleCall("Women & Child Helpline..109");
});
document.getElementById("call-btn6").addEventListener("click", function () {
  handleCall("Anti-Corruption Helpline..106");
});
document.getElementById("call-btn7").addEventListener("click", function () {
  handleCall("Electricity Helpline..16216");
});
document.getElementById("call-btn8").addEventListener("click", function () {
  handleCall("Brac Helpline..16445");
});
document.getElementById("call-btn9").addEventListener("click", function () {
  handleCall("Bangladesh Railway Helpline..163");
});
