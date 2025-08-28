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
