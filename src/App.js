import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import UserPage from "./pages/UserPage/UserPage";
import Header from "./components/Header/Header";
import styles from "./App.module.css";
import { CurrentUserContext } from "./contexts/CurrentUserContext";
import { useAppDataContext } from "./contexts/AppContext";
import { BallTriangle } from "react-loader-spinner";

const App = () => {
  const currentUserState = useState({}); // Using array destruction to get the state
  const { isLoading } = useAppDataContext();

  if (isLoading) return <BallTriangle />;

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
