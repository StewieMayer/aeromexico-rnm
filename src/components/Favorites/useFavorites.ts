import { setCurrentCharacter } from "@/lib/features/characters/charactersSlice";
import { useAppSelector } from "@/lib/hooks";
import { Character } from "@/types/characterTypes";
import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";

export const useFavorites = () => {
  const [show, setshow] = useState<boolean>(false);
  const dispatch = useDispatch();

  const favorites = useAppSelector((state) => state.characters.favorites);
  const handleShow = () => setshow(!show);
  const hasFavorites = useMemo(() => favorites.length > 0, [favorites]);
  const openFavorite = (character: Character) =>{
    dispatch(setCurrentCharacter(character));
    handleShow()
  }

  return {
    favorites,
    handleShow,
    openFavorite,
    show,
    hasFavorites,
  };
};
