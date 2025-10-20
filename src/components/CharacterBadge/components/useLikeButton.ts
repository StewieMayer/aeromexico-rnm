import {
  addFavorite,
  removeFavorite,
} from "@/lib/features/characters/charactersSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Character } from "@/types/characterTypes";
import { useMemo} from "react";

export const useLikeButton = (character: Character) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.characters.favorites);
  const isFavorite = useMemo(() => {
    if(!favorites) return false
    const favorite = favorites.find((favorite) => favorite.id == character.id);
    return favorite != undefined;
  }, [favorites, character]);

  const handleClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(character));
    } else {
      dispatch(addFavorite(character));
    }
  };

  return {
    isFavorite,
    handleClick,
  };
};
