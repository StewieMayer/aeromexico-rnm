"useClient";
import Image from "next/image";
import style from "./CharacterCard.module.css";
import { useCharacterCard } from "./useCharacterCard";
import { StatusAlert } from "./components/StatusAlert";
import { Skeleton } from "../Skeleton/Skeleton";

export const CharacterCard = () => {
  const { currentCharacter } = useCharacterCard();

  return (
    <div className={`${style.cardContainer}`}>
      {currentCharacter ? (
        <>
          <Image
            src={currentCharacter.image}
            alt={currentCharacter.name}
            fill
          />
          <div className={`${style.statusContainer}`}>
            <StatusAlert status={currentCharacter.status} />
          </div>
          <div className={`${style.cardFooter}`}>
            <div className={`${style.characterTitle} ${style.dataContainer}`}>
              <h3>{currentCharacter.name}</h3>
              <span>{currentCharacter.species}</span>
              <span>{}</span>
            </div>
            <div className={`${style.characterData}`}>
              <div className={`${style.characterTitle} ${style.dataContainer}`}>
                <h3>Origin</h3>
                <span>{currentCharacter.origin.name}</span>
              </div>
              <div className={`${style.characterTitle} ${style.dataContainer}`}>
                <h3>Location</h3>
                <span>{currentCharacter.location.name}</span>
              </div>
              <div className={`${style.characterTitle} ${style.dataContainer}`}>
                <h3>Gender</h3>
                <span>{currentCharacter.gender}</span>
              </div>
              <div className={`${style.characterTitle} ${style.dataContainer}`}>
                <h3>Episodes</h3>
                <span>{currentCharacter.episode.length}</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Skeleton />
      )}
    </div>
  );
};
