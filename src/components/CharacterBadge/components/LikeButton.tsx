import { FaRegHeart } from 'react-icons/fa';
import style from './LikeButton.module.css'
import { Character } from '@/types/characterTypes';
import { useLikeButton } from './useLikeButton';

interface LikeButtonProps {
  character: Character;
}

export const LikeButton = ({ character }: LikeButtonProps) => {

  const {handleClick,isFavorite} = useLikeButton(character)

  return <button className={`${style.button}`} onClick={handleClick}>
    <FaRegHeart className={`${isFavorite ? style.favorite : ''}`} />
    <span>Like</span>
  </button>;
};
