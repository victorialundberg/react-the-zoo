import { getAnimals } from "../services/animalService";

export const animalsLoader = async () => {
  const response = getAnimals();

  return (await response).data;
};
