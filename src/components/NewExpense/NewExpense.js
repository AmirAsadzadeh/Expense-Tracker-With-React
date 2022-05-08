import "./NewExpense.css";
import React from "react";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";

function newExpense(props) {
  const newSavedExpenseHandler = function (savedExpense) {
    const newExpense = { ...savedExpense, id: Math.random() };
    props.onNewExpense(newExpense);
  };

  return (
    <Card className="new-expense">
      <ExpenseForm onSaveNewExpense={newSavedExpenseHandler}></ExpenseForm>
    </Card>
  );
}

export default newExpense;
