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

function setGame() {
  //set up the grid in html
  for (let i = 0; i < 9; i++) {
    //i goes from 0 to 8, stops at 9
    //<div id="0-8"></div>
    let tile = document.createElement("div");
    tile.id = i.toString();
    // tile.addEventListener("click", selectTile);
    document.getElementById("board").appendChild(tile);
  }
  //setInterval(setMole, 1000); // 1000 miliseconds = 1 second, every 1 second call setMole
  //setInterval(setPlant, 2000); // 2000 miliseconds = 2 seconds, every 2 second call setPlant
}

//! ------------------------------------------------------------------------------
//? ---------------------FUNCION QUE SE EXPORTA QUE PINTA LA PAGINA--------------
//! ------------------------------------------------------------------------------
export const PrintTopoPage = () => {
  document.querySelector("main").innerHTML = template();
  setGame();
};
