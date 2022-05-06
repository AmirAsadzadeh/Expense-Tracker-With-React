import "./NewExpense.css";
import React from "react";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";

function newExpense() {
  return (
    <Card className="new-expense">
      <ExpenseForm></ExpenseForm>
    </Card>
  );
}

export default newExpense;
