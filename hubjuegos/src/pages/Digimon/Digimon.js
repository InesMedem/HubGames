import "./Digimon.css";
import { getData } from "../../global/state/globalState";

import { CartaDigimon } from "../../components";
//import { dataDigimonGlobal, dataDigimon, getInfoDigimon } from "../../utils";

const template = () => `
<div id="digimonDiv">
<div id="galleryDigimon">
    <!-- This is where the Digimon gallery container goes -->
    <!-- The Digimon gallery itself will be rendered here -->
    </div>
    </div>
`;

const dataServiceDigimon = async () => {
  const getDataDigimon = getData("Digimon");

  const { digimonData, type } = getDataDigimon;
};

export const printDigimonPage = () => {
  document.querySelector("main").innerHTML = template();
  dataServiceDigimon();
};
