import { Fragment, useRef, useState } from "react";
import "./expenseForm.css";
import Error from "../UI/error.jsx";

const ExpenseForm = (props) => {
  const titleInputRef = useRef();
  const amountInputRef = useRef();
  const dateInputRef = useRef();
  const [error, setError] = useState();

  const errorHandler = () => {
    setError(null);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredAmount = amountInputRef.current.value;
    const enteredDate = dateInputRef.current.value;

    if (
      enteredTitle.trim().length === 0 ||
      enteredAmount.trim().length === 0 ||
      enteredDate.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid title, amount and date.",
      });
      return;
    }

    const expenseData = {
      title: enteredTitle,
      price: Number(enteredAmount),
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    titleInputRef.current.value = "";
    amountInputRef.current.value = "";
    dateInputRef.current.value = "";
  };

  return (
    <Fragment>
      {error && <Error title={error.title} message={error.message} onConfirm={errorHandler} />}
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" ref={titleInputRef} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" ref={amountInputRef} />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2026-12-31" ref={dateInputRef} />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" className="alternative" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </Fragment>
  );
};

export default ExpenseForm;
