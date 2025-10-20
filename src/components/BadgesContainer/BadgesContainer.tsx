import { CharacterBadge } from "../CharacterBadge/CharacterBadge";
import styles from "./BadgesContainer.module.css";
import { useBadgesContainer } from "./useBadgesContainer";

export const BadgesContainer = () => {
  const { characters } = useBadgesContainer();

  return (
    <div className={`${styles.container}`}>
      {characters.map((character) => (
        <CharacterBadge character={character} key={character.id} />
      ))}
    </div>
  );
};
