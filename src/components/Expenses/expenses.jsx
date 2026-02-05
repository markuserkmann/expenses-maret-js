import { useState } from "react";
import "./expenses.css";
import Card from "../UI/card.jsx";
import ExpenseItem from "./expenseItem.jsx";
import ExpensesFilter from "./expensesFilter.jsx";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2024");

  const filterChangeHandler = (selectedYear) => {
    console.log("Expenses.jsx selected year:", selectedYear);
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return new Date(expense.date).getFullYear().toString() === filteredYear;
  });

  console.log("Expenses.jsx current filteredYear:", filteredYear);

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {filteredExpenses.map((expense) => (
        <ExpenseItem key={expense.id} data={expense} />
      ))}
    </Card>
  );
};

export default Expenses;
