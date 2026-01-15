import "./app.css";
import Expenses from "./components/Expenses/expenses.jsx";

const App = () => {
  const expenses = [
    {
      date: new Date(2024, 10, 12),
      title: "New book",
      price: 30.99,
    },
    {
      date: new Date(2024, 10, 12),
      title: "New jeans",
      price: 99.99,
    },
  ];

  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
