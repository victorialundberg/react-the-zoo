import { useState } from "react";
import { AnimalsDisplay } from "../components/AnimalsDisplay";
import { IAnimal } from "../models/IAnimal";
import { useLoaderData } from "react-router-dom";

export const Animals = () => {
  const fetchedAnimals = useLoaderData() as IAnimal[];
  const storedAnimals = localStorage.getItem("animals");

  const [animals, setAnimals] = useState<IAnimal[]>(() => {
    if (storedAnimals) {
      return JSON.parse(storedAnimals);
    } else {
      localStorage.setItem("animals", JSON.stringify(fetchedAnimals));
      return fetchedAnimals;
    }
  });

  return (
    <>
      <AnimalsDisplay animals={animals}></AnimalsDisplay>
    </>
  );
};

// Ev flytta local storage till loader
