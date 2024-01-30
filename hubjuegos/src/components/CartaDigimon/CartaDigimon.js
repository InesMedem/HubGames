import "./CartaDigimon.css";

export const CartaDigimon = (data) => {
  document.getElementById("galleryDigimon").innerHTML = "";

  data.map((digimon) => {
    const templateFigure = ` 

            <div id="figure">
        <img id= "img" src=${digimon.image} />
        <h3>${digimon.name}</h3>
             </div>`;

    document.getElementById("galleryDigimon").innerHTML += templateFigure;

    addListeners(data);
  });
};
