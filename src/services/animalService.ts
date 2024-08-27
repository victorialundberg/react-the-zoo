import { IAnimal } from "../models/IAnimal";
import { get } from "./serviceBase";

const BASE_URL = "https://animals.azurewebsites.net/api/animals";

export const getAnimals = async () => {
  const response = await get<IAnimal>(BASE_URL);

  localStorage.setItem("animals", JSON.stringify(response.data));
};
