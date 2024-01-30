import { getByIdDigimon } from "../services/digimon.service";
import { setData } from "../global/state/globalState";

let dataDigimonGlobal;
export const dataDigimon = async () => {
  const rawData = [];

  for (let i = 1; i < 30; i++) {
    rawData.push(await getByIdDigimon(i));
  }

  return dataMap(rawData);
};

const dataMap = (data) => {
  const filterData = data.map((digimon) => ({
    name: digimon.name,
    image: digimon.images.length > 0 ? digimon.images[0].href : null,
  }));

  return dataDigimonGlobal;
};

export const getInfoDigimon = async () => {
  const data = await dataDigimon();
  setData(data, "Digimon");
};
getInfoDigimon();
