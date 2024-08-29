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
            <div>
              <img
                src={animal.imageUrl}
                alt={animal.name}
                onError={(e) => {
                  e.currentTarget.src =
                    "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png       ";
                }}
                width="200"
                height="200"
              />
            </div>
            <p>{animal.shortDescription}</p>
          </div>
        ))}
      </section>
    </>
  );
};
