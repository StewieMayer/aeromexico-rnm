import { useAppSelector } from "@/lib/hooks";

export const useBadgesContainer = () => {
  const characters = useAppSelector(
    (state) => state.characters.filteredCharacters
  );

  return {
    characters,
  };
};
