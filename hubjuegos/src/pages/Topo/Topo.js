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

// function to set up the game
// set up the grid in HTML
// create a div element for each tile on the board
// attach a click event listener to each tile
// append the tile to the board element in html
// set the intervals to the board element in the html
// set up intervals to periodically spawn mole and plan images on the baord

// function to get random tile on the board

// function to set a mole image on a random tile

// clear the previous mole tile

// create a new mole element

// get a random tile, making sure not to overlap with the current plant tile

// set the current mole tile and append the mole image to it

// function to set the plant image on a random tile

// clear the previous plant tile

// create a new plant image element

// get random tile, making sure not to overlap with the current mole tile

// set the current plan tile and append the plant image to it

// function to handel the click event on a tile

// check if the clicked tile is the mole tile
// increase the score and update the score in the HTML
// if the clicked tile is the plant tile, end the game and display teh final score

//! ------------------------------------------------------------------------------
//? ---------------------FUNCION QUE SE EXPORTA QUE PINTA LA PAGINA--------------
//! ------------------------------------------------------------------------------
export const PrintTopoPage = () => {
  document.querySelector("main").innerHTML = template();
  setGame();
};
