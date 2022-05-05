import "./ExpenseDate.css";
import React from "react";

function ExpenseDate(props) {
  const month = new Date(props.date).toLocaleString("default", {
    month: "long",
  });

  const day = new Date(props.date).toLocaleString("default", {
    day: "2-digit",
  });

  const year = new Date(props.date).toLocaleString("default", {
    year: "numeric",
  });

  return (
    <div className="expense-item-date__date">
      <p className="expense-item-date__month">{month}</p>
      <p className="expense-item-date__day">{day}</p>
      <p className="expense-item-date__year">{year}</p>
    </div>
  );
}

export default ExpenseDate;
