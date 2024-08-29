import { IAnimal } from "../models/IAnimal";
interface IAnimalDisplayProps {
  animal: IAnimal;
}
export const AnimalDisplay = (props: IAnimalDisplayProps) => {
  return (
    <>
      <section className="animals">
        <h2>{props.animal.name}</h2>
        <h4>{props.animal.latinName}</h4>
        <div>
          <img
            src={props.animal.imageUrl}
            alt={props.animal.name}
            onError={(e) => {
              e.currentTarget.src =
                "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png       ";
            }}
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
