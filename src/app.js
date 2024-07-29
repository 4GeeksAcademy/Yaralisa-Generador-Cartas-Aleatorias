import "./style.css";
// window.onload = function() {};
const pintas = ["corazon", "pica", "trebol", "diamante"];
const valores = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

let rarriba1 = document.querySelector("#rarriba2");
let medio1 = document.querySelector("#medio1");
let rabajo = document.querySelector("#rabajo2");

function seclecionValores(arr1, arr2) {
  let carta = [];
  carta.push(arr1[Math.floor(Math.random() * arr1.length)]);
  carta.push(arr2[Math.floor(Math.random() * arr2.length)]);
  return carta;
}
function Color(arr) {
  if (arr[0] === "corazon" || arr[0] === "diamante") {
    // rarriba1.style.Color = "red";
    rarriba1.style.color = "red";
    medio1.style.color = "red";
    rabajo.style.color = "red";
  } else {
    rarriba1.style.color = "black";
    medio1.style.color = "black";
    rabajo.style.color = "black";
  }
}
function selectPintas(arr) {
  if (arr[0] === "corazon") {
    rarriba1.innerHTML = "♥";
    rabajo.innerHTML = "♥";
  } else if (arr[0] === "diamante") {
    rarriba1.innerHTML = "♦";
    rabajo.innerHTML = "♦";
  } else if (arr[0] === "trebol") {
    rarriba1.innerHTML = "♣";
    rabajo.innerHTML = "♣";
  } else {
    rarriba1.innerHTML = "♠";
    rabajo.innerHTML = "♠";
  }
}
function numeros(arr) {
  medio1.innerHTML = arr[1];
}
function ejecutar() {
  let carta = seclecionValores(pintas, valores);
  Color(carta);
  selectPintas(carta);
  numeros(carta);
}

window.onload = function() {
  ejecutar();
};
document.querySelector("button").addEventListener("click", ejecutar);
