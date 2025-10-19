import { CharactersState, Character } from "@/types/characterTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CharactersState = {
  characters: [],
  filteredCharacters: [],
  currentCharacter: null,
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setAllCharacters: (state, action: PayloadAction<Character[]>) => {
      state.characters = action.payload;
      state.filteredCharacters = action.payload;
    },
    filterCharacters: (state, action: PayloadAction<string>) => {
      const searchTerm = action.payload.toLowerCase();

      if (searchTerm) {
        state.filteredCharacters = state.characters.filter((character) =>
          character.name.toLowerCase().includes(searchTerm)
        );
      } else {
        state.filteredCharacters = state.characters;
      }
    },
    setCurrentCharacter: (state, action: PayloadAction<Character | null>) => {
      state.currentCharacter = action.payload;
    },
  },
});

export const {
  setAllCharacters,
  filterCharacters,
  setCurrentCharacter,
} = charactersSlice.actions;

export default charactersSlice.reducer;
