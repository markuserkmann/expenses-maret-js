import { useEffect, useState } from "react";
import Expenses from "./components/Expenses/expenses.jsx";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";
import NewExpense from "./components/NewExpense/newExpense.jsx";

const API_BASE = "http://localhost:3000";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const storedUserLoggedInInformation =
      localStorage.getItem("isLoggedUser");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }

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
  }, [isLoggedIn]);

  const loginHandler = (email) => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedUser", "1");
    localStorage.setItem("loggedUserEmail", email);
  };

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

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedUser");
    localStorage.removeItem("loggedUserEmail");
    setIsLoggedIn(false);
  };

  return (
    <>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn ? (
          <Login onLogin={loginHandler} />
        ) : (
          <>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
          </>
        )}
      </main>
    </>
  );
};

export default App;
