import styles from "./Favorites.module.css";
import { useFavorites } from "./useFavorites";

export const Favorites = () => {
  const { favorites, handleShow, openFavorite, show, hasFavorites } =
    useFavorites();

  return (
    <div className={`${styles.container}`}>
      {hasFavorites && show && (
        <div className={`${styles.favSelector}`}>
          {favorites.map((favorite) => (
            <div
              className={`${styles.fav}`}
              key={favorite.id}
              onClick={() => openFavorite(favorite)}
            >
              <span>{favorite.name.split(" ")[0].toUpperCase()}</span>
            </div>
          ))}
        </div>
      )}

      <button onClick={handleShow}>
        <span>FAVS</span>
      </button>
    </div>
  );
};
