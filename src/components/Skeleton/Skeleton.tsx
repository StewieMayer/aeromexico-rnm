import style from './Skeleton.module.css'

export const Skeleton = ()=>{
return <div className={`${style.skeleton}`} data-testid='skeleton'></div>
}