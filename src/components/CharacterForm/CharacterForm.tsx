'use client'
import styles from "./CharacterForm.module.css";
import { FiSearch } from "react-icons/fi";
import { useCharacterForm } from "./useCharacterForm";

export const CharacterForm = () => {
  const { handleChange, name } = useCharacterForm();
  return (
    <div className={`${styles.formContainer}`}>
      <div className={`${styles.searchContainer}`}>
        <FiSearch className={`${styles.searchIcon}`} />
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Find your character..."
          className={`${styles.searchInput}`}
        />
      </div>
    </div>
  );
};
