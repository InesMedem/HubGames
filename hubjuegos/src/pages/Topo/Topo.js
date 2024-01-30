import "./Topo.css";
import { TopoBoard } from "../../components";

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
//? ---------------------FUNCION QUE SE EXPORTA QUE PINTA LA PAGINA--------------
//! ------------------------------------------------------------------------------
export const PrintTopoPage = () => {
  document.querySelector("main").innerHTML = template();
  TopoBoard();
};
