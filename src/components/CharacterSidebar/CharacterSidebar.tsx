import { CharacterForm } from '../CharacterForm/CharacterForm'
import style from './CharacterSidebar.module.css'

export const CharacterSidebar = ()=>{
    return <div className={`${style.sidebarContainer}`}>
        <CharacterForm />
    </div>
}