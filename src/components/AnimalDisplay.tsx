import { useState } from "react";
import { IAnimal } from "../models/IAnimal";
interface IAnimalDisplayProps {
  animal: IAnimal;
  feedAnimal: (id: number) => void;
}

export const AnimalDisplay = (props: IAnimalDisplayProps) => {
  const [isFed, setIsFed] = useState(props.animal.isFed);
  const [lastFed, setLastFed] = useState(props.animal.lastFed);
  const currentTime = new Date();

  console.log("Last fed: ", props.animal.lastFed);
  console.log("Current time: ", currentTime);

  const checkTime = () => {
    const storedTime = new Date(props.animal.lastFed);
    const timeDifference = currentTime.getTime() - storedTime.getTime();
    const threeHours = 108000000;

    console.log("Time sinsce fed: ", timeDifference);
    console.log("Stored time: ", storedTime);

    return timeDifference >= threeHours;
  };

  const handleClick = () => {
    setIsFed(true);
    setLastFed(currentTime.toISOString());
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
          {isFed ? <p>Jag är mätt</p> : <p>Jag är hungrig</p>}
          <p>
            {props.animal.name} åt senast{" "}
            {lastFed.split(".")[0].replace("T", " ")}
          </p>
          <button onClick={handleClick} disabled={!checkTime() || isFed}>
            Mata {props.animal.name}
          </button>
        </div>
      </section>
    </>
  );
};
