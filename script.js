const container = document.querySelector(".container");
const buttonNo = document.querySelector(".buttonNo");
const buttonYes = document.querySelector(".buttonYes");
const buttonRetry = document.querySelector(".buttonRetry");
const mainCatsContainer = document.querySelector(".catsContainer");
const finalCats = document.querySelector(".finalCats");
const allGifs = mainCatsContainer.querySelectorAll("img");
const h1 = document.querySelector("h1");

function getRandomPosition() {
  const containerRect = container.getBoundingClientRect();
  const buttonRect = buttonNo.getBoundingClientRect();
  const yesButtonRect = buttonYes.getBoundingClientRect();
  let x, y;
  do {
    x = Math.random() * (containerRect.width - buttonRect.width);
    y = Math.random() * (containerRect.height - buttonRect.height);
    const overlap =
      x < yesButtonRect.right - containerRect.left &&
      x + buttonRect.width > yesButtonRect.left - containerRect.left &&
      y < yesButtonRect.bottom - containerRect.top &&
      y + buttonRect.height > yesButtonRect.top - containerRect.top;
    if (!overlap) break;
  } while (true);
  return { x: containerRect.left + x, y: containerRect.top + y };
}

function showRandomGif() {
  allGifs.forEach((gif) => (gif.style.display = "none"));
  const randomIndex = Math.floor(Math.random() * 6) + 1;
  allGifs[randomIndex].style.display = "block";
}

buttonNo.addEventListener("click", () => {
  const pos = getRandomPosition();
  buttonNo.style.position = "absolute";
  buttonNo.style.left =
    pos.x - container.getBoundingClientRect().left + "px";
  buttonNo.style.top =
    pos.y - container.getBoundingClientRect().top + "px";
  showRandomGif();
});

buttonYes.addEventListener("click", () => {
  h1.textContent = "Yay! It's Mrs. Huda!";
  mainCatsContainer.style.display = "none";
  finalCats.style.display = "flex";
  buttonYes.style.display = "none";
  buttonNo.style.display = "none";
  buttonRetry.style.display = "flex";
  buttonRetry.style.alignItems = "center";
  buttonRetry.style.justifyContent = "center";
});

buttonRetry.addEventListener("click", () => location.reload());
