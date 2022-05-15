import "./ExpenseForm.css";
import React, { useState } from "react";

function ExpenseForm(props) {
  const today = new Date().toISOString().split("T")[0];
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // use one state hook call insted of three calls
  // const [userInputs, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  //   const formData = {};

  const titleChangeHandler = function (event) {
    setEnteredTitle(event.target.value);
    // setUserInput({ ...userInputs, enteredTitle: event.target.value });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = function (event) {
    setEnteredAmount(event.target.value);
    // setUserInput({ ...userInputs, enteredAmount: event.target.value });
  };

  const dateChangeHandler = function (event) {
    setEnteredDate(event.target.value);
    // setUserInput({ ...userInputs, enteredDate: event.target.value });
  };

  const submitHandler = function (event) {
    event.preventDefault();

    const newExpense = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    if (newExpense.title && newExpense.amount && newExpense.date)
      props.onSaveNewExpense(newExpense);

    setEnteredAmount("");
    setEnteredTitle("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title: </label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">amount: </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            pattern="[0-9]+"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">amount: </label>
          <input
            type="date"
            min="2019-01-01"
            max={today}
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
