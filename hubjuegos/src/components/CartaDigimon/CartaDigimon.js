import "./CartaDigimon.css";

export const CartaDigimon = (data) => {
  const galleryDigimonElement = document.getElementById("galleryDigimon");
  galleryDigimonElement.innerHTML = "";

  data.forEach((digimon) => {
    const templateFigure = ` 

        <div id="figure">

            <img id= "img" src=${digimon.image}/>
            <h3>${digimon.name}</h3>
      
        </div>`;

    // document.getElementById("galleryDigimon").innerHTML += templateFigure;
    galleryDigimonElement.innerHTML += templateFigure;
  });
  addListeners(data);
};
