import { BadgesContainer } from '../BadgesContainer/BadgesContainer'
import { CharacterForm } from '../CharacterForm/CharacterForm'
import { Favorites } from '../Favorites/Favorites'
import style from './CharacterSidebar.module.css'

export const CharacterSidebar = ()=>{
    return <div className={`${style.sidebarContainer}`}>
        <CharacterForm />
        <BadgesContainer />
        <Favorites />
    </div>
}