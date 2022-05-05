import "./ExpenseItem.css";
import React from "react";
import ExpenseDate from "./ExpenseDate.js";
import Card from "./Card";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <div className="expense-item__date">
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <p className="expense-item__title">{props.title}</p>
        <p className="expense-item__price">${props.amount}</p>
      </div>
    </Card>
  );
}

export default ExpenseItem;
