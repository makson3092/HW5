let tipsMessage = document.querySelector(".tipsMessage");
let titleGM = document.querySelector(".titleGM");
let startGM = document.querySelector(".startGM");
let interactivePanel = document.querySelector(".interactivePanel");
let showMess = document.querySelector(".showMess");
let totalGM = document.querySelector(".totalGM");
let timeClock = document.querySelector("#timeClock");
let attempts = document.querySelector("#attempts");
let total = document.querySelector(".total");
let resetGM = document.querySelector(".resetGM");

let tipsItems = [
  "Хм...",
  "Не можу сказати",
  "Ні",
  "Хочу персики",
  "Майже вгадав",
  "Ха-ха",
  "Відпочинок - гарна думка :)",
  "Все вийде , потрібно трохи часу",
];

let max = 100;
let attempt = 0;
let timerId;
let elapsed = 0;
let randomValue = Math.floor(Math.random() * max + 1);

console.log(timerId);

document.querySelector(".start").addEventListener("click", function (e) {
  titleGM.style.display = "none";
  totalGM.style.display = "none";
  startGM.style.visibility = "visible";
  e = generateButton();
  timerId = setInterval(() => elapsed++, 1000);
  setInterval(time, 1000);
});

function time() {
  timeClock.innerHTML = "Час: " + elapsed + " cекунд";
}

function winner(btn) {
  if ("click") {
    console.log(elapsed);
    attempt++;
    attempts.textContent = "Спроби: " + attempt;
    let randomIn = Math.floor(Math.random() * tipsItems.length);
    btn.style.backgroundColor = getRandomColor();
    let currentValue = btn.textContent;
    if (currentValue > randomValue) {
      showMess.innerHTML = `Я загадав число меньше чим ${currentValue}`;
      tipsMessage.innerHTML = tipsItems[randomIn];
    } else if (currentValue < randomValue) {
      showMess.innerHTML = `Я загадав число більше чим ${currentValue}`;
      tipsMessage.innerHTML = tipsItems[randomIn];
    }
    if (currentValue == randomValue) {
      clearInterval(timerId);
      btn.style.backgroundColor = "gold";
      alert(
        `Вірно! Загадане число ${randomValue}. Ви вгадали з ${attempt}й спроби за ${elapsed} сек.`
      );
      total.innerHTML = `Загадане число - ${randomValue} Спроб вгадування - ${attempt} Пройдено часу - ${elapsed} сек.`;
      tipsMessage.innerHTML = `You Win !!!! </br> обнови сторінку , щоб почати знову`;
      totalGM.style.display = "block";
      tipsMessage.classList.remove("tipsMessage");
      tipsMessage.classList.add("tipsMessageM");
      interactivePanel.style.display = "none";
      showMess.style.display = "none";
      resetGM.addEventListener("click", () => {
        window.location.reload();
      });
    }
  }
}

function generateButton() {
  let counter = 0;

  for (let i = 0; i < 100; i++) {
    counter++;
    let btn = document.createElement("button");
    btn.classList.add("interactiveElement");
    interactivePanel.append(btn);
    btn.textContent += counter;
    showMess.textContent = "Спробуйте вгадати загадане число";
    btn.addEventListener("click", () => {
      winner(btn);
    });
  }
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
