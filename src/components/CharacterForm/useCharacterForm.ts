import { filterCharacters } from "@/lib/features/characters/charactersSlice";
import { useAppDispatch } from "@/lib/hooks";
import { ChangeEvent, useEffect, useState } from "react";

export const useCharacterForm = () => {
  const [name, setName] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  useEffect(() => {
    dispatch(filterCharacters(name));
  }, [name, dispatch]);

  return {
    name,
    handleChange,
  };
};
