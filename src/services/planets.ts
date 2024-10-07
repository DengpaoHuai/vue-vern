import { PlanetResponse } from "../types/planet";

export const getPlanet = async (url: string) => {
  const response = await fetch(url);
  const data: PlanetResponse = await response.json();
  return data;
};
