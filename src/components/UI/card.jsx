import "./card.css";

const Card = (props) => {
  //  if props.className is defined, use it
  //  otherwise use an empty string
  const classes = `card ${props.className ? props.className : ""}`;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
