export { setIdMoleOne, setIdMoleTwo };

let interval = {
  idMoleOne: "",
  idMoleTwo: "",
};

// This function essentially serves as a getter for the interval object.
export const getIntervalMole = () => interval;

// setIdMoleOne is a function that takes a parameter data and sets the value of interval.idMoleOne to the provided data.
// This function is a setter for the identifier of the first mole (idMoleOne).
export const setIdMoleOne = (data) => (interval.idMoleOne = data);
export const setIdMoleTwo = (data) => (interval.idMoleTwo = data);

/**Si las variables globales que se utilizan en los juegos van en los estados , porque van cambiando ,
 * y luego se utilizan con la función get y se cambian con la set
 */
