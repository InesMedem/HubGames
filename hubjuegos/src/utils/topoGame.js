let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;

const getRandomTile = () => {
  //math.random --> 0-1 --> (0-1) * 9 = (0-9) --> round down to (0-8) integers
  let num = Math.floor(Math.random() * 9);
  return num.toString();
};

const setMole = () => {
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
};

const setPlant = () => {
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
};

// changed to "old"" function because of the this
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

export { setMole, setPlant, selectTile, getRandomTile };
