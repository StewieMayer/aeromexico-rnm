import { useAppSelector } from "@/lib/hooks"

export const useCharacterCard = ()=>{
    const currentCharacter = useAppSelector((state)=>state.characters.currentCharacter)
    return {
        currentCharacter
    }
}