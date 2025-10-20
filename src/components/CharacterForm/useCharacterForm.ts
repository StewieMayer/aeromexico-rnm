import { filterCharacters } from "@/lib/features/characters/charactersSlice";
import { useAppDispatch } from "@/lib/hooks";
import { ChangeEvent, useEffect, useState } from "react";
import { useLazyGetCharactersQuery } from "@/lib/features/api/characterApi";
import { setAllCharacters } from "@/lib/features/characters/charactersSlice";

export const useCharacterForm = () => {
  const [name, setName] = useState<string>("");
  const [getCharacters] = useLazyGetCharactersQuery();
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  useEffect(() => {
    dispatch(filterCharacters(name));
  }, [name, dispatch]);

  useEffect(() => {
    getCharacters()
      .unwrap()
      .then((data) => {
        if (data.length > 0) dispatch(setAllCharacters(data));
      })
      .catch()
      .finally();
  }, [getCharacters, dispatch]);

  return {
    name,
    handleChange,
  };
};
