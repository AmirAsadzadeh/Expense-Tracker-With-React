import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  if (props.filteredExpenses.length === 0 && props.filteredYear !== "all")
    return <h1 className="expense-filter__fail">no expenses found</h1>;
  if (props.filteredYear === "all")
    return props.expenses.map((expense) => (
      <li>
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      </li>
    ));
  else
    return props.filteredExpenses.map((expense) => (
      <li>
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      </li>
    ));
}

export default ExpensesList;
