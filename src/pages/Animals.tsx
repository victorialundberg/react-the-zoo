// import { useState } from "react";
import { IAnimal } from "../models/IAnimal";
import { useLoaderData } from "react-router-dom";

export const Animals = () => {
  const animals = useLoaderData() as IAnimal[];
  localStorage.setItem("animals", JSON.stringify(animals));

  return (
    <>
      <section className="movies">
        {animals.map((animal) => (
          <div key={animal.id}>
            <h3>{animal.name}</h3>
            <h4>{animal.latinName}</h4>
            <div>
              <img
                src={animal.imageUrl}
                alt={animal.name}
                width="200"
                height="200"
              />
            </div>
            <button className={animal.isFed ? "fed" : "notFed"}>Mata</button>
          </div>
        ))}
      </section>
    </>
  );
};
