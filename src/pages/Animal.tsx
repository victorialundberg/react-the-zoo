import { useLoaderData } from "react-router-dom";
import { AnimalDisplay } from "../components/AnimalDisplay";
import { IAnimal } from "../models/IAnimal";
import { formatTime } from "../utils/formatTime";
import { getTimeDifference } from "../utils/getTimeDifference";

export const Animal = () => {
  const animal = useLoaderData() as IAnimal;

  const checkIfFed = (id: number) => {
    const storedAnimals = localStorage.getItem("animals");
    const timeDifference = getTimeDifference(id);
    const threeHours = 10800000;

    if (storedAnimals) {
      const animals = JSON.parse(storedAnimals).map((animal: IAnimal) => {
        if (
          animal.id === id &&
          timeDifference !== null &&
          timeDifference >= threeHours
        )
          return { ...animal, isFed: false };
        else return animal;
      });
      localStorage.setItem("animals", JSON.stringify(animals));
    }
  };

  const checkIfStarving = (id: number) => {
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

  const feedAnimal = (id: number) => {
    const storedAnimals = localStorage.getItem("animals");
    const formattedCurrentTime = formatTime(new Date());

    if (storedAnimals) {
      const animals = JSON.parse(storedAnimals).map((animal: IAnimal) => {
        if (animal.id === id)
          return { ...animal, isFed: true, lastFed: formattedCurrentTime };
        else return animal;
      });
      localStorage.setItem("animals", JSON.stringify(animals));
    }
  };

  return (
    <>
      <AnimalDisplay
        animal={animal}
        feedAnimal={feedAnimal}
        checkIfFed={checkIfFed}
        checkIfStarving={checkIfStarving}
      ></AnimalDisplay>
    </>
  );
};
