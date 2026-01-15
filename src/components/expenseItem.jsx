import "./expenseItem.jsx";

const ExpenseItem = () => {
  return (
    <>
      <div className="expense-item">
        <div>Date</div>

        <div className="expense-item_description">
          <h2>Title</h2>

          <div className="expense-item_price">Price</div>
        </div>
      </div>
    </>
  );
};

export default ExpenseItem;
