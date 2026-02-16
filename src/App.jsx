import { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation =
      localStorage.getItem("isLoggedUser");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email) => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedUser", "1");
    localStorage.setItem("loggedUserEmail", email);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedUser");
    localStorage.removeItem("loggedUserEmail");
    setIsLoggedIn(false);
  };

  return (
    <>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>{!isLoggedIn ? <Login onLogin={loginHandler} /> : <Home />}</main>
    </>
  );
};

export default App;
