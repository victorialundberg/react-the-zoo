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
          <div key={animal.id} className="animalsDisplayAnimal">
            <h4 className="animalHeading">{animal.name}</h4>
            <div>
              <img
                className="animalsImg"
                src={animal.imageUrl}
                alt={animal.name}
                onError={(e) => {
                  e.currentTarget.src =
                    "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png       ";
                }}
                width="300"
                height="300"
              />
            </div>
            {animal.isFed ? (
              <p className="isFull">Jag är mätt</p>
            ) : (
              <p className="isHungry">Jag är hungrig</p>
            )}
            <button className="goToAnimalBtn">
              <Link to={`/animal/${animal.id}`}>Gå in till {animal.name}</Link>
            </button>

            <p>{animal.shortDescription}</p>
          </div>
        ))}
      </section>
    </>
  );
};
