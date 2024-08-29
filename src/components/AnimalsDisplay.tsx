import { Link } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
interface IAnimalsDisplayProps {
  animals: IAnimal[];
}
export const AnimalsDisplay = (props: IAnimalsDisplayProps) => {
  return (
    <>
      <section className="animals">
        {props.animals.map((animal) => (
          <div key={animal.id}>
            <Link to={`/animal/${animal.id}`}>{animal.name}</Link>
            <h4>{animal.latinName}</h4>
            <div>
              <img
                src={animal.imageUrl}
                alt={animal.name}
                width="200"
                height="200"
              />
            </div>
            <p>
              {animal.name} åt senast{" "}
              {/* {animal.lastFed.split(".")[0].replace("T", " ")} */}
            </p>
            <button disabled={animal.isFed ? true : false}>
              Mata genom staketet
            </button>
          </div>
        ))}
      </section>
    </>
  );
};
