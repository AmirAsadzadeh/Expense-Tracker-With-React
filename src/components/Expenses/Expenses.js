import "./Expenses.css";
import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("all");

  const changeFilter = function (selectedYear) {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <ul>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={changeFilter}
        ></ExpenseFilter>
        <ExpensesList
          filteredExpenses={filteredExpenses}
          filteredYear={filteredYear}
          expenses={props.items}
        >
          {" "}
        </ExpensesList>
      </Card>
    </ul>
  );
}

export default Expenses;
