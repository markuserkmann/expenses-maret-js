import { useContext } from "react";
import ThemeContext from "../../store/theme-context.jsx";
import Navigation from "./Navigation";
import "./MainHeader.css";

const MainHeader = (props) => {
  const themeCtx = useContext(ThemeContext);

  return (
    <header className="main-header">
      <h1>Expense Tracker</h1>
      <div className="header-actions">
        <button className="theme-toggle" onClick={themeCtx.toggleTheme}>
          Toggle Theme
        </button>
        <Navigation
          isLoggedIn={props.isAuthenticated}
          onLogout={props.onLogout}
        />
      </div>
    </header>
  );
};

export default MainHeader;
