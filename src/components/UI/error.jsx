import { Fragment } from "react";
import ReactDOM from "react-dom";
import Button from "./button.jsx";
import "./error.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onConfirm}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <header className="modal__header">
        <h2>{props.title}</h2>
      </header>
      <div className="modal__content">
        <p>{props.message}</p>
      </div>
      <footer className="modal__actions">
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </div>
  );
};

const Error = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root"),
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root"),
      )}
    </Fragment>
  );
};

export default Error;
