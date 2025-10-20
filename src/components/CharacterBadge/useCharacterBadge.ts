import { setCurrentCharacter } from "@/lib/features/characters/charactersSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Character } from "@/types/characterTypes";
import { useMemo } from "react";

export const useCharacterBadge = (character: Character) => {
  const dispatch = useAppDispatch();
  const currentCharacter = useAppSelector(
    (state) => state.characters.currentCharacter
  );

  const isActive = useMemo(() => {
    return currentCharacter != null && currentCharacter.id == character.id;
  }, [currentCharacter, character]);

  const setCurrent = ()=> dispatch(setCurrentCharacter(character));

  return {
    isActive,
    setCurrent,
  };
};
