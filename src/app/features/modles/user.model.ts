
export interface PeopleResponse {
    count: number,
    results: People[]
}
export interface People {
    name: string,
    height: string,
    mass: string,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
    homeworld: string,
    films: string[],
    species: string[],
    vehicles: string[],
    starships: string[],
    created: Date,
    edited: Date,
    url: string
}

export interface User {
    name: string;
    price: number;
}

export interface PlanetInfo {
    name: string,
    rotation_period: string,
    orbital_period: string,
    diameter: string,
    climate: string,
    gravity: string,
    terrain: string,
    surface_water: string,
    population: string,
    residents: string[]
}

export class User {
    constructor(public username: string, public userValue: number) {}
  }