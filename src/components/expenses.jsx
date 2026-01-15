import "./expenses.css";
import Card from "./card.jsx";
import ExpenseItem from "./expenseItem.jsx";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.items.map((expense, index) => (
        <ExpenseItem key={index} data={expense} />
      ))}
    </Card>
  );
};

export default Expenses;
