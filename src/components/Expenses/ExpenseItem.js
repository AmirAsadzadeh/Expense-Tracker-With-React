import "./ExpenseItem.css";
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const [title,setTitle] =  useState(props.title)

  const titleHandler = function () {
    setTitle('updated!')
  };
  return (
    <Card className="expense-item">
      <div className="expense-item__date">
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <p className="expense-item__title">{title}</p>
        <p className="expense-item__price">${props.amount}</p>
      </div>
      <button onClick={titleHandler}>change</button>
    </Card>
  );
}

export default ExpenseItem;
