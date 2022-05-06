import "./App.css";
import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  return (
    <div>
      <NewExpense></NewExpense>
      <Expenses></Expenses>
    </div>
  );
}

export default App;
