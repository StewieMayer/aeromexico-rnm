import { Character } from "@/types/characterTypes"
import Image from "next/image"
import { LikeButton } from "./components/LikeButton"
import style from './CharacterBadge.module.css'
import { useCharacterBadge } from "./useCharacterBadge"

interface CharacterBadgeProps {
    character: Character
}

export const CharacterBadge = ({character}:CharacterBadgeProps)=>{

    const {isActive,setCurrent} = useCharacterBadge(character)

    return <div className={`${style.badgeContainer} ${isActive ? style.badgeContainerActive : ''}`} onClick={setCurrent}>
        <div className={`${style.badgeTitle}`}>{character.name.split(' ')[0].toUpperCase()}</div>
        <Image src={character.image} alt={character.name} width={145} height={145}/>
        <LikeButton id={character.id} />
    </div>
}