import "./App.css";
import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Card from "./components/UI/Card";

function App() {
  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

  expenses.forEach((item) => {
    item.date = new Date(item.date);
  });

  const [items, setItems] = useState(expenses);

  const newExpenseHandler = function (expense) {
    setItems((prevItems) => {
      const newExpense = [...prevItems, expense];
      localStorage.setItem("expenses", JSON.stringify(newExpense));
      return [...prevItems, expense];
    });
  };

  if (expenses.length >= 1) {
    return (
      <div>
        <NewExpense onNewExpense={newExpenseHandler}></NewExpense>
        <Expenses items={items}></Expenses>
      </div>
    );
  } else {
    return (
      <div>
        <NewExpense onNewExpense={newExpenseHandler}></NewExpense>;
        <Card className="empty">
          <p>
            There is no expenses yet :)))<br></br>You can add it on the above
            form
          </p>
        </Card>
      </div>
    );
  }
}

export default App;
