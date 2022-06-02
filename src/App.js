import "./App.css";
import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Card from "./components/UI/Card";
import Chart from "./components/Chart/Chart";
import Delete from "./components/UI/Delete";

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

  const clearLocalStorage = function (event) {
    event.preventDefault();
    setItems([]);
    localStorage.clear();
  };

  if (expenses.length >= 1) {
    return (
      <div>
        <Delete onClick={clearLocalStorage} />
        <NewExpense onNewExpense={newExpenseHandler}></NewExpense>
        <Expenses items={items}></Expenses>
      </div>
    );
  } else {
    return (
      <div>
        <Delete onClick={clearLocalStorage} />
        <NewExpense onNewExpense={newExpenseHandler}></NewExpense>
        <Chart
          expenses={expenses}
          filteredExpenses={expenses}
          filteredYear={"all"}
        />
        <Card className="empty">
          <p>There is no expenses yet :)</p>
          <p>You can add it on the above form</p>
        </Card>
      </div>
    );
  }
}

export default App;
