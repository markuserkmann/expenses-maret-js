import "./expenses.css";
import Card from "../UI/card.jsx";
import ExpenseItem from "./expenseItem.jsx";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.items.map((expense) => (
        <ExpenseItem key={expense.id} data={expense} />
      ))}
    </Card>
  );
};

export default Expenses;
