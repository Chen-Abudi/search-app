import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../Main/Main";
import UserPage from "../UserPage/UserPage";
import Header from "../Header/Header";
import styles from "./App.module.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const App = () => {
  const currentUserState = useState({}); // Using array destruction to get the state

  return (
    <CurrentUserContext.Provider value={currentUserState[0]}>
      <div className={styles.app}>
        <Header />
        <Routes>
          <Route exact path="/" Component={Main} />
          <Route path="/users/:userId" Component={UserPage} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
