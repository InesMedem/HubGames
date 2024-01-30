import { axiosUtil } from "../utils";

export const getByIdDigimon = async (id) => {
  const optionsRequest = {
    method: "GET",
    url: `https://digi-api.com/api/v1/digimon/${id}`,
  };

  return await axiosUtil(optionsRequest);
};
