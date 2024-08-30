import { IAnimal } from "../models/IAnimal";
import { getAnimals } from "../services/animalService";

export const animalsLoader = async (): Promise<IAnimal[]> => {
  const storedAnimals = localStorage.getItem("animals");

  if (storedAnimals) {
    console.log("animals found in storage", JSON.parse(storedAnimals));

    return JSON.parse(storedAnimals);
  }
  const response = (await getAnimals()) as IAnimal[];

  localStorage.setItem("animals", JSON.stringify(response));

  console.log("animals fetched from api", response);

  return response;
};
