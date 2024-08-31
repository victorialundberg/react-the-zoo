import { useLoaderData } from "react-router-dom";
import { AnimalDisplay } from "../components/AnimalDisplay";
import { IAnimal } from "../models/IAnimal";
import { formatTime } from "../utils/formatTime";

export const Animal = () => {
  const animal = useLoaderData() as IAnimal;

  const checkIfFed = (id: number) => {
    const storedTime = new Date(animal.lastFed);
    const currentTime = new Date();
    const timeDifference = currentTime.getTime() - storedTime.getTime();
    const threeHours = 30000;
    const storedAnimals = localStorage.getItem("animals");

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
    console.log("djur", id, "trycker på knappen");

    const storedAnimals = localStorage.getItem("animals");
    const formattedCurrentTime = formatTime(new Date());

    if (storedAnimals) {
      console.log("djuret finns");

      const animals = JSON.parse(storedAnimals).map((animal: IAnimal) => {
        if (animal.id === id)
          return { ...animal, isFed: true, lastFed: formattedCurrentTime };
        else return animal;
      });
      console.log("djuret ändrades");
      console.log(animals);

      localStorage.setItem("animals", JSON.stringify(animals));
      console.log(localStorage.getItem("animals")); // Updates as i should
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
