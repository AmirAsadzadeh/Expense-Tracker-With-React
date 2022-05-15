import "./Expenses.css";
import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {

  const changeFilter = function (value) {
    console.log(value);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter onChangedFilter={changeFilter}></ExpenseFilter>
      {props.items.map((item) => (
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
      ))}
    </Card>
  );
}

export default Expenses;
