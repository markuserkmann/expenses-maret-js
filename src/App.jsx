import { useEffect, useState } from "react";
import "./app.css";
import Expenses from "./components/Expenses/expenses.jsx";
import NewExpense from "./components/NewExpense/newExpense.jsx";

const API_BASE = "http://localhost:3000";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const loadExpenses = async () => {
      try {
        const response = await fetch(`${API_BASE}/expenses`);
        if (!response.ok) {
          return;
        }
        const data = await response.json();
        const loaded = Array.isArray(data.expenses) ? data.expenses : [];
        setExpenses(
          loaded.map((expense) => ({
            ...expense,
            date: new Date(expense.date),
          }))
        );
      } catch {
        // Ignore load errors for now.
      }
    };

    loadExpenses();
  }, []);

  const addExpenseHandler = async (expense) => {
    try {
      const response = await fetch(`${API_BASE}/expenses`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(expense),
      });
      if (!response.ok) {
        return;
      }
      const data = await response.json();
      const savedExpense = data.expense || expense;
      setExpenses((prevExpenses) => [
        {
          ...savedExpense,
          date: new Date(savedExpense.date),
        },
        ...prevExpenses,
      ]);
    } catch {
      // Ignore save errors for now.
    }
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
