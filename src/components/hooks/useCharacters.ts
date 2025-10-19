
import { useLazyGetCharactersQuery } from "@/lib/features/api/characterApi";
import { setAllCharacters } from "@/lib/features/characters/charactersSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useEffect } from "react";

export const useCharacters = ()=>{
     const [getCharacters] = useLazyGetCharactersQuery();
     const dispatch = useAppDispatch()

  useEffect(()=>{
    getCharacters().unwrap().then((data)=>{
        if(data.length>0) dispatch(setAllCharacters(data))
    }).catch().finally()
  },[getCharacters,dispatch])

}