import { Params } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";

interface IAnimalLoader {
  params: Params<string>;
}

export const animalLoader = ({
  params,
}: IAnimalLoader): IAnimal | { error: string } => {
  const storedAnimals = localStorage.getItem("animals");

  if (!storedAnimals) {
    return { error: "Alla djur verkar ha rymt!" };
  }

  const animals: IAnimal[] = JSON.parse(storedAnimals);
  const displayAnimal = animals.find(
    (animal) => animal.id === Number(params.id)
  );

  if (!displayAnimal) {
    return { error: "Någon har visst gått och gömt sig!" };
  }

  return displayAnimal;
};
