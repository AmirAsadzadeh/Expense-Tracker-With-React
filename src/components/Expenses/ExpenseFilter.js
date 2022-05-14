import "./ExpenseFilter.css";
import React, { useState } from "react";

function ExpenseFilter(props) {
  const [filterValue, setFilter] = useState("2019");
  const filterChangeHandler = function (event) {
    setFilter(event.target.value);
    props.onChangedFilter(filterValue);
  };
  return (
    <div className="expense_action--filter">
      <label htmlFor="">filter by year: </label>
      <select
        name="expense-filter"
        id="expense-filter"
        onChange={filterChangeHandler}
        value={filterValue}
      >
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </div>
  );
}

export default ExpenseFilter;
