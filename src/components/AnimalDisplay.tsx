import { useState } from "react";
import { IAnimal } from "../models/IAnimal";
import { formatTime } from "../utils/formatTime";
interface IAnimalDisplayProps {
  animal: IAnimal;
  feedAnimal: (id: number) => void;
  checkIfFed: (id: number) => void;
  checkIfStarving: (id: number) => boolean;
}

export const AnimalDisplay = (props: IAnimalDisplayProps) => {
  props.checkIfFed(props.animal.id);

  const [isFed, setIsFed] = useState(props.animal.isFed);
  const [lastFed, setLastFed] = useState(props.animal.lastFed);
  const formattedCurrentTime = formatTime(new Date());

  const handleClick = () => {
    setIsFed(true);
    setLastFed(formattedCurrentTime.toString());
    props.feedAnimal(props.animal.id);
  };
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
          {props.checkIfStarving(props.animal.id) && (
            <p className="isStarving">
              {props.animal.name} har inte ätit på fyra timmar!
            </p>
          )}
          {/* {isFed ? <p>Jag är mätt</p> : <p>Jag är hungrig</p>} */}
          <p>
            {props.animal.name} åt senast{" "}
            {lastFed.split(".")[0].replace("T", " ")}
          </p>
          <button onClick={handleClick} disabled={isFed}>
            Mata {props.animal.name}
          </button>
        </div>
      </section>
    </>
  );
};
