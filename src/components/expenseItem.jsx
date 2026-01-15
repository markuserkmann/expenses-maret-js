import "./expenseItem.jsx";

const ExpenseItem = (props) => {
  const date = new Date(2024, 10, 12);
  const title = "New book";
  const price = 30.99;

  return (
    <>
      <div className="expense-item">
        <div>{props.data.date.toDateString()}</div>
        <div className="expense-item_description">
          <h2>{props.data.title}</h2>
          <div className="expense-item_price">{props.data.price}</div>
        </div>
      </div>
    </>
  );
};

export default ExpenseItem;
