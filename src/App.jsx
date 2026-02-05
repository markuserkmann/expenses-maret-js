import { useEffect, useState } from "react";
import "./app.css";
import Expenses from "./components/Expenses/expenses.jsx";
import NewExpense from "./components/NewExpense/newExpense.jsx";

const App = () => {
  const [expenses, setExpenses] = useState(() => {
    const storedExpenses = localStorage.getItem("expenses");

    if (!storedExpenses) {
      return [];
    }

    try {
      const parsedExpenses = JSON.parse(storedExpenses);
      return parsedExpenses.map((expense) => ({
        ...expense,
        date: new Date(expense.date),
      }));
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

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
