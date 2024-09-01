import { AnimalsDisplay } from "../components/AnimalsDisplay";
import { StarvingAnimals } from "../components/StarvingAnimals";
import { IAnimal } from "../models/IAnimal";
import { useLoaderData } from "react-router-dom";
import { getTimeDifference } from "../utils/getTimeDifference";

export const Animals = () => {
  const animals = useLoaderData() as IAnimal[];

  const checkIfStarving = (id: number): boolean => {
    const storedAnimals = localStorage.getItem("animals");
    const timeDifference = getTimeDifference(id);
    const fourHours = 14400000;

    if (storedAnimals && timeDifference !== null) {
      const foundAnimal = JSON.parse(storedAnimals).find(
        (animal: IAnimal) => animal.id === id
      );
      return foundAnimal ? timeDifference >= fourHours : false;
    }

    return false;
  };

  return (
    <>
      <StarvingAnimals
        animals={animals}
        checkIfStarving={checkIfStarving}
      ></StarvingAnimals>
      <AnimalsDisplay animals={animals}></AnimalsDisplay>
    </>
  );
};

// Ev flytta local storage till loader
