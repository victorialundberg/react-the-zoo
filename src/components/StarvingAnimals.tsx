// import { Link } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
interface IAnimalsDisplayProps {
  animals: IAnimal[];
  checkIfStarving: (id: number) => boolean;
}

export const StarvingAnimals = (props: IAnimalsDisplayProps) => {
  return (
    <>
      <section className="starvingAnimals">
        {props.animals
          .filter((animal) => props.checkIfStarving(animal.id))
          .map((animal) => (
            <div key={animal.id} className="starvingAnimalsAnimal">
              <p className="starvingAnimal">{animal.name} behöver äta!</p>
            </div>
          ))}
      </section>
    </>
  );
};
