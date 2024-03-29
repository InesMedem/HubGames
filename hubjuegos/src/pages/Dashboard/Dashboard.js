import { getIntervalMole } from "../../global/state/topoState";
import { getInfo, initControler } from "../../utils";
import "./Dashboard.css";

const template = () => `
<div id="containerDashboard">
<ul>
  <li>
    <figure id="navigatePokemon">
      <img
        src="https://res.cloudinary.com/dwfemumfv/image/upload/v1706608200/Untitled_design_1_sojbsu.png"
        alt="go to page pokemon"
      />
      <h2>POKEMON</h2>
    </figure>
  </li>
  <li>
    <figure id="navigateTopo">
      <img
        src="https://res.cloudinary.com/dwfemumfv/image/upload/v1706460881/monty-mole_mcr9fu.png"
        alt=" go to wacka topo game"
      />
      <h2>WACKA A TOPO</h2>
    </figure>
  </li>
  <li>
    <figure id="navigateDigimon">
      <img
        src="https://res.cloudinary.com/dwfemumfv/image/upload/v1706460632/DigimonMonster_erbzga.png"
        alt="go to digimon cards"
      />
      <h2> DIGIMON CARDS</h2>
    </figure>
  </li>
</ul>
</div>

`;

const addEventListeners = () => {
  /** le damos el evento al boton de pokemon que es la unica pagina de contenido por
   * ahora esta creada en el proyecto
   */
  const navigatePokemon = document.getElementById("navigatePokemon");
  navigatePokemon.addEventListener("click", () => {
    initControler("Pokemon");
  });

  const navigateTopo = document.getElementById("navigateTopo");
  navigateTopo.addEventListener("click", () => {
    initControler("Topo");
  });

  const navigateDigimon = document.getElementById("navigateDigimon");
  navigateDigimon.addEventListener("click", () => {
    initControler("Digimon");
  });
};

export const printTemplateDashboard = () => {
  /** Como siempre las paginas se renderizan en el main por lo cual inyectamos el template en el contenedor del main */
  clearInterval(getIntervalMole().idMoleOne);
  clearInterval(getIntervalMole().idMoleTwo);
  document.querySelector("main").innerHTML = template();

  /** Para la nav, que la habiamos ocultado en el login, la volvemos a renderizar cambiandole el display de none a flex */
  document.querySelector("nav").style.display = "flex";

  /** metemos los escuchadores de la pagina */
  addEventListeners();
  getInfo();
};
