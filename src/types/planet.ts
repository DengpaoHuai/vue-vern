export type Planet = {
  name: string;
  population: string;
  diameter: string;
  climate: string;
  terrain: string;
  gravity: string;
  rotation_period: string;
  orbital_period: string;
  surface_water: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

export type PlanetResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Planet[];
};
