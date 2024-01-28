import "./Topo.css";

//! ------------------------------------------------------------------------------
//? ------------------------------TEMPLATE INICIAL--------------------------------
//! ------------------------------------------------------------------------------
const template = () => `
    <div id="bodyMole"> 
      <h1 id="h1"> Wack a Mole </h1>
      <h2 id="score"> 0 </h2>

      <div id="board"></div>
    </div>
`;

//! ------------------------------------------------------------------------------
//? ------------------------------LOGICA DEL JUEGO -------------------------------
//! ------------------------------------------------------------------------------

let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;

function setGame() {
  //set up the grid in html
  for (let i = 0; i < 9; i++) {
    //i goes from 0 to 8, stops at 9
    //<div id="0-8"></div>
    let tile = document.createElement("div");
    tile.id = i.toString();
    tile.addEventListener("click", selectTile);
    document.getElementById("board").appendChild(tile);
  }
  setInterval(setMole, 1000); // 1000 miliseconds = 1 second, every 1 second call setMole
  setInterval(setPlant, 2000); // 2000 miliseconds = 2 seconds, every 2 second call setPlant
}

function getRandomTile() {
  //math.random --> 0-1 --> (0-1) * 9 = (0-9) --> round down to (0-8) integers
  let num = Math.floor(Math.random() * 9);
  return num.toString();
}

function setMole() {
  if (gameOver) {
    return;
  }
  if (currMoleTile) {
    currMoleTile.innerHTML = "";
  }
  let mole = document.createElement("img");
  mole.src =
    "https://res.cloudinary.com/dwfemumfv/image/upload/v1706460881/monty-mole_mcr9fu.png";

  let num = getRandomTile();
  if (currPlantTile && currPlantTile.id == num) {
    return;
  }
  currMoleTile = document.getElementById(num);
  currMoleTile.appendChild(mole);
}

function setPlant() {
  if (gameOver) {
    return;
  }
  if (currPlantTile) {
    currPlantTile.innerHTML = "";
  }
  let plant = document.createElement("img");
  plant.src =
    "https://res.cloudinary.com/dwfemumfv/image/upload/v1706460883/piranha-plant_jetrep.png";

  let num = getRandomTile();
  if (currMoleTile && currMoleTile.id == num) {
    return;
  }
  currPlantTile = document.getElementById(num);
  currPlantTile.appendChild(plant);
}

function selectTile() {
  if (gameOver) {
    return;
  }
  if (this == currMoleTile) {
    score += 10;
    document.getElementById("score").innerText = score.toString(); //update score html
  } else if (this == currPlantTile) {
    document.getElementById("score").innerText =
      "GAME OVER: " + score.toString(); //update score html
    gameOver = true;
  }
}

//! ------------------------------------------------------------------------------
//? ---------------------FUNCION QUE SE EXPORTA QUE PINTA LA PAGINA--------------
//! ------------------------------------------------------------------------------
export const PrintTopoPage = () => {
  document.querySelector("main").innerHTML = template();
  setGame();
};
