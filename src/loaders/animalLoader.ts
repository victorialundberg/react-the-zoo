import { Params } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import { animalsLoader } from "./animalsLoader";

interface IAnimalLoader {
  params: Params<string>;
}

export const animalLoader = async ({
  params,
}: IAnimalLoader): Promise<IAnimal> => {
  const animals = await animalsLoader();
  const displayAnimal = animals.find(
    (animal) => animal.id === Number(params.id)
  );

  console.log(displayAnimal);

  if (!displayAnimal) {
    throw new Error("Djuret hittas inte");
  }

  return displayAnimal;
};
