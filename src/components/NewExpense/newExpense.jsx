import { useState } from "react";
import "./newExpenseForm.css";
import ExpenseForm from "./expenseForm.jsx";

const NewExpense = (props) => {
  const [editForm, setEditForm] = useState(false);

  const startEditingHandler = () => {
    setEditForm(true);
  };

  const stopEditingHandler = () => {
    setEditForm(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setEditForm(false);
  };

  return (
    <div className="new-expense">
      {!editForm && <button onClick={startEditingHandler}>Add New Expense</button>}
      {editForm && (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />
      )}
    </div>
  );
};

export default NewExpense;
