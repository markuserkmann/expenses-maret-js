import Navigation from "./Navigation";
import "./MainHeader.css";

const MainHeader = (props) => {
  return (
    <header className="main-header">
      <h1>Expense Tracker</h1>
      <Navigation
        isLoggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
      />
    </header>
  );
};

export default MainHeader;
