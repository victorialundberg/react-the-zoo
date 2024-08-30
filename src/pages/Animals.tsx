import { AnimalsDisplay } from "../components/AnimalsDisplay";
import { IAnimal } from "../models/IAnimal";
import { useLoaderData } from "react-router-dom";

export const Animals = () => {
  const animals = useLoaderData() as IAnimal[];
  return (
    <>
      <AnimalsDisplay animals={animals}></AnimalsDisplay>
    </>
  );
};

// Ev flytta local storage till loader
