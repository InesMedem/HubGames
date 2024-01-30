import "./TopoBoard.css";
// import { setIdMoleOne, setIdMoleTwo } from "../global/state/topoState";
import { setMole, setPlant, selectTile } from "../../utils";

export const TopoBoard = () => {
  //set up the grid in html
  for (let i = 0; i < 9; i++) {
    //i goes from 0 to 8, stops at 9
    //<div id="0-8"></div>
    let tile = document.createElement("div");
    tile.addEventListener("click", selectTile);
    tile.id = i.toString();
    document.getElementById("board").appendChild(tile);
  }
  /** const idIntervalMole = setInterval(setMole, 7000);
  setIdMoleOne(idIntervalMole);
  const idIntervalPlant = setInterval(
    setPlant,
    2000
  ); /**HAY QUE LIMPIARLO CON CLEAR INTERVAL
  setIdMoleTwo(idIntervalPlant); */
  setInterval(setMole, 1000); // 1000 miliseconds = 1 second, every 1 second call setMole
  setInterval(setPlant, 2000); // 2000 miliseconds = 2 seconds, every 2 second call setPlant
};
