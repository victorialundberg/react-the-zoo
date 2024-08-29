import { useLoaderData } from "react-router-dom";
import { AnimalDisplay } from "../components/AnimalDisplay";
import { IAnimal } from "../models/IAnimal";
import { useState } from "react";

export const Animal = () => {
  const [animal, setAnimal] = useState<IAnimal>(useLoaderData() as IAnimal);

  return (
    <>
      <AnimalDisplay animal={animal}></AnimalDisplay>
    </>
  );
};
