import "./App.css";
import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
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

  const [items, setItems] = useState(expenses);

  const newExpenseHandler = function (expense) {
    setItems((prevItems) => {
      return [expense, ...prevItems];
    });
  };

  return (
    <div>
      <NewExpense onNewExpense={newExpenseHandler}></NewExpense>
      <Expenses items={items}></Expenses>
    </div>
  );
}

export default App;
