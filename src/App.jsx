import { useState } from "react";
import "./app.css";
import Expenses from "./components/Expenses/expenses.jsx";
import NewExpense from "./components/NewExpense/newExpense.jsx";

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      date: new Date(2024, 10, 12),
      title: "New book",
      price: 30.99,
    },
    {
      id: "e2",
      date: new Date(2024, 10, 12),
      title: "New jeans",
      price: 99.99,
    },
  ]);

  const addExpenseHandler = (expense) => {
    console.log("In App.jsx");
    console.log(expense);
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
