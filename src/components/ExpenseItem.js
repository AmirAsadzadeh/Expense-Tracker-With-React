import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div className="expense-item__date">
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <p className="expense-item__title">{props.title}</p>
        <p className="expense-item__price">${props.amount}</p>
      </div>
    </div>
  );
}

export default ExpenseItem;
