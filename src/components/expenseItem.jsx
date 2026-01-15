import "./expenseItem.css";
import ExpenseDate from "./expenseDate.jsx";

const ExpenseItem = (props) => {
  return (
    <>
      <div className="expense-item">
        <ExpenseDate date={props.data.date} />
        <div className="expense-item__description">
          <h2>{props.data.title}</h2>
          <div className="expense-item__price">{props.data.price}</div>
        </div>
      </div>
    </>
  );
};

export default ExpenseItem;
