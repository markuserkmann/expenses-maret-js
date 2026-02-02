import { useState } from "react";
import "./expenseItem.css";
import Card from "../UI/card.jsx";
import ExpenseDate from "./expenseDate.jsx";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.data.title);

  const clickHandler = () => {
    console.log("Clicked!");
    setTitle("Updated!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.data.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.data.price}</div>
      </div>
      <button onClick={clickHandler}>Click</button>
    </Card>
  );
};

export default ExpenseItem;
