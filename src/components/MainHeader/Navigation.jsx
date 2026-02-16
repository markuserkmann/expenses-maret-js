import Button from "../UI/button";
import "./Navigation.css";

const Navigation = (props) => {
  return (
    <nav className="nav">
      {props.isLoggedIn && (
        <ul>
          <li>
            <a href="/">Users</a>
          </li>
          <li>
            <a href="/">Admin</a>
          </li>
          <li>
            <Button onClick={props.onLogout}>Logout</Button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
