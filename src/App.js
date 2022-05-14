import "./App.css";
import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const newExpenseHandler = function (expense){
    return expense
  }

  return (
    <div>
      <NewExpense onNewExpense = {newExpenseHandler}></NewExpense>
      <Expenses></Expenses>
    </div>
  );
}

export default App;
