import { IAnimal } from "../models/IAnimal";

export const getTimeDifference = (id: number) => {
  const storedAnimals = localStorage.getItem("animals");
  if (!storedAnimals) return null;

  const animals = JSON.parse(storedAnimals);
  const foundAnimal = animals.find((animal: IAnimal) => animal.id === id);
  if (!foundAnimal || !foundAnimal.lastFed) return null;

  const storedTime = new Date(foundAnimal.lastFed);
  const currentTime = new Date();
  const timeDifference = currentTime.getTime() - storedTime.getTime();
  return timeDifference;
};
