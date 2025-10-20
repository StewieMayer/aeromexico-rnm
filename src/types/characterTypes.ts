export type Location = {
  name: string;
  url: string;
};

export type Origin = Location;

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: Array<string>;
  url: string;
  created: string;
};

export type ResultData = Array<Character>;

export type CharacterGender = "female" | "male" | "genderless" | "unknown";
export type CharacterStatus = "alive" | "dead" | "unknown";

export interface CharactersState {
  characters: Character[];
  filteredCharacters: Character[];
  currentCharacter: Character | null;
  favorites:Character[];
}
