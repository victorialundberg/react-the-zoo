import { useLoaderData } from "react-router-dom";
import { AnimalDisplay } from "../components/AnimalDisplay";
import { IAnimal } from "../models/IAnimal";

export const Animal = () => {
  const animal = useLoaderData() as IAnimal;

  const feedAnimal = (id: number) => {
    console.log("djur", id, "trycker på knappen");

    const storedAnimals = localStorage.getItem("animals");

    if (storedAnimals) {
      console.log("djuret finns");

      const animals = JSON.parse(storedAnimals).map((animal: IAnimal) => {
        if (animal.id === id)
          return { ...animal, isFed: true, lastFed: new Date().toISOString() };
        else return animal;
      });
      console.log("djuret ändrades");
      localStorage.setItem("animals", JSON.stringify(animals));
    }
  };

  return (
    <>
      <AnimalDisplay animal={animal} feedAnimal={feedAnimal}></AnimalDisplay>
    </>
  );
};
