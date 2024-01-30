import "./Digimon.css";
//! ------------------------------------------------------------------------------
//? ------------------------------TEMPLATE INICIAL--------------------------------
//! ------------------------------------------------------------------------------
const template = () => `
<div id="figure">
<img id= "img" src=${digimon.image} />
<h3>${digimon.name}</h3>
</div>
`;

//! ------------------------------------------------------------------------------
//? ------------------------------LOGICA DEL JUEGO -------------------------------
//! ------------------------------------------------------------------------------

//! ------------------------------------------------------------------------------
//? ---------------------FUNCION QUE SE EXPORTA QUE PINTA LA PAGINA--------------
//! ------------------------------------------------------------------------------
export const printDigimonPage = () => {
  document.querySelector("main").innerHTML = template();
};
