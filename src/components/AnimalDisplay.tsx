import { useState } from "react";
import { IAnimal } from "../models/IAnimal";
import { formatTime } from "../utils/formatTime";
import notFoundImg from "../assets/images/animalImgNotFound.png";

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
      <section className="animal">
        <h2>{props.animal.name}</h2>
        <h4>{props.animal.latinName}</h4>
        <div className="animalImgContainer">
          <img
            className="animalImg"
            src={props.animal.imageUrl}
            alt={props.animal.name}
            onError={(e) => {
              e.currentTarget.src = notFoundImg;
            }}
            width="300"
            height="300"
          />
        </div>
        <p className="longDescription">{props.animal.longDescription}</p>
        {props.checkIfStarving(props.animal.id) && (
          <p className="isStarving">
            {props.animal.name} har inte ätit på över fyra timmar!
          </p>
        )}
        <p className="lastFed">
          Åt senast {lastFed.split(".")[0].replace("T", " ")}
        </p>
        <button
          className="feedAnimalBtn"
          onClick={handleClick}
          disabled={isFed}
        >
          Mata {props.animal.name}
        </button>
      </section>
    </>
  );
};
