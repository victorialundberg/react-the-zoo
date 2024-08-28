import { IAnimal } from "../models/IAnimal";
interface IAnimalsDisplayProps {
  animals: IAnimal[];
}
export const AnimalsDisplay = (props: IAnimalsDisplayProps) => {
  return (
    <>
      <section className="movies">
        {props.animals.map((animal) => (
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
            <button disabled={animal.isFed ? true : false}>Mata</button>
          </div>
        ))}
      </section>
    </>
  );
};
