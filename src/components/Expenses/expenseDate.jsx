import "./expenseDate.css";

const ExpenseDate = (props) => {
  const expenseDate = new Date(props.date);
  const day = expenseDate.toLocaleString("en-US", { day: "2-digit" });
  const month = expenseDate.toLocaleString("en-US", { month: "long" });
  const year = expenseDate.getFullYear();

  return (
    <>
      <div className="expense-date">
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
      </div>
    </>
  );
};

export default ExpenseDate;
