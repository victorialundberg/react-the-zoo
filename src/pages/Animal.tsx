import { useLoaderData } from "react-router-dom";
import { AnimalDisplay } from "../components/AnimalDisplay";
import { IAnimal } from "../models/IAnimal";
import { formatTime } from "../utils/formatTime";

export const Animal = () => {
  const animal = useLoaderData() as IAnimal;

  const checkIfFed = (id: number) => {
    const storedAnimals = localStorage.getItem("animals");
    if (!storedAnimals) return;
    const animals = JSON.parse(storedAnimals);
    const foundAnimal = animals.find((animal: IAnimal) => animal.id === id);
    const storedTime = new Date(foundAnimal.lastFed);
    const currentTime = new Date();
    const timeDifference = currentTime.getTime() - storedTime.getTime();
    const threeHours = 10800000;

    if (storedAnimals) {
      const animals = JSON.parse(storedAnimals).map((animal: IAnimal) => {
        if (animal.id === id && timeDifference >= threeHours)
          return { ...animal, isFed: false };
        else return animal;
      });
      localStorage.setItem("animals", JSON.stringify(animals));
    }
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
      ></AnimalDisplay>
    </>
  );
};
