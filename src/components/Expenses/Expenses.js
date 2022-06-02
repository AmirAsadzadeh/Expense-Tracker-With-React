import "./Expenses.css";
import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import Chart from "../Chart/Chart.js";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("all");

  const changeFilter = function (selectedYear) {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Chart
        expenses={props.items}
        filteredExpenses={filteredExpenses}
        filteredYear={filteredYear}
      />
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={changeFilter}
        ></ExpenseFilter>
        <ExpensesList
          filteredExpenses={filteredExpenses}
          filteredYear={filteredYear}
          expenses={props.items}
        ></ExpensesList>
      </Card>
    </div>
  );
}

export default Expenses;
