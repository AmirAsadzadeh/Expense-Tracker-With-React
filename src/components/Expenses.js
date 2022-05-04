import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

function Expenses() {
  const expenses = [
    {
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(),
    },
    {
      title: "House Rent",
      amount: 150,
      date: new Date(2021, 2, 14),
    },
    {
      title: "food",
      amount: 1500,
      date: new Date(2022, 1, 28),
    },
    {
      title: "hobby",
      amount: 700.99,
      date: new Date(2018, 11, 24),
    },
  ];

  return (
    <Card className="expenses">
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
