// import { useState } from "react";
import { AnimalsDisplay } from "../components/AnimalsDisplay";
import { IAnimal } from "../models/IAnimal";
import { useLoaderData } from "react-router-dom";

export const Animals = () => {
  const animals = useLoaderData() as IAnimal[];
  localStorage.setItem("animals", JSON.stringify(animals));

  return <AnimalsDisplay animals={animals}></AnimalsDisplay>;
};
