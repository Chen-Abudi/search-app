import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (evt) => {
    onSearch(evt.target.value);
  };

  return (
    <section className={styles.searchBar}>
      <input
        type="text"
        name="search"
        id="input-search"
        placeholder="Search users by name, email, phone..."
        onChange={handleInputChange}
        className={styles.searchBarInput}
        required
      />
    </section>
  );
};

export default SearchBar;
