import { Link } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import notFoundImg from "../assets/images/animalImgNotFound.png";

interface IAnimalsDisplayProps {
  animals: IAnimal[];
}
export const AnimalsDisplay = (props: IAnimalsDisplayProps) => {
  return (
    <>
      <section className="animals">
        {props.animals.map((animal) => (
          <div key={animal.id} className="animalsDisplayAnimal">
            <h4 className="animalsHeading">{animal.name}</h4>
            <div>
              <img
                className="animalsImg"
                src={animal.imageUrl}
                alt={animal.name}
                onError={(e) => {
                  e.currentTarget.src = notFoundImg;
                }}
                width="300"
                height="300"
              />
            </div>
            <button className="goToAnimalBtn">
              <Link className="goToAnimalLink" to={`/animal/${animal.id}`}>
                Gå in till {animal.name}
              </Link>
            </button>

            <p className="animalShortDescription">{animal.shortDescription}</p>
          </div>
        ))}
      </section>
    </>
  );
};
