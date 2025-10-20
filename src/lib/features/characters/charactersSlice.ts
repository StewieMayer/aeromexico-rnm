import { CharactersState, Character } from "@/types/characterTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CharactersState = {
  characters: [],
  filteredCharacters: [],
  currentCharacter: null,
  favorites: [],
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
    addFavorite: (state, action: PayloadAction<Character>) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<Character>) => {
      state.favorites = state.favorites.filter(
        (favorite) => favorite.id != action.payload.id
      );
    },
  },
});

export const { setAllCharacters, filterCharacters, setCurrentCharacter, addFavorite,removeFavorite } =
  charactersSlice.actions;

export default charactersSlice.reducer;
