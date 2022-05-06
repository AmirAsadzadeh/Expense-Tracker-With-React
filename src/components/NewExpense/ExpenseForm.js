import "./ExpenseForm.css";
import React from "react";

function ExpenseForm() {
  const today = new Date().toISOString();
  console.log(new Date().toISOString());
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title: </label>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">amount: </label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">amount: </label>
          <input type="date" min="2019-01-01" max={today.split("T")[0]} />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
