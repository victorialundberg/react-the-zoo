import { IAnimal } from "../models/IAnimal";
interface IAnimalDisplayProps {
  animal: IAnimal;
}
export const AnimalDisplay = (props: IAnimalDisplayProps) => {
  console.log(props.animal);

  return (
    <>
      <section className="animals">
        <h2>{props.animal.name}</h2>
        <h4>{props.animal.latinName}</h4>
        <div>
          <img
            src={props.animal.imageUrl}
            alt={props.animal.name}
            width="400"
            height="400"
          />
          <p>{props.animal.longDescription}</p>
          <p>
            {props.animal.name} åt senast{" "}
            {/* {props.animal.lastFed.split(".")[0].replace("T", " ")} */}
          </p>
          <button disabled={props.animal.isFed ? true : false}>
            Mata {props.animal.name}
          </button>
        </div>
      </section>
    </>
  );
};
