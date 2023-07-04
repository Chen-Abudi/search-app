import React from "react";
import UserList from "../UserList/UserList";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.mainTitle}>User List</h1>
      <UserList />
    </main>
  );
};

export default Main;
