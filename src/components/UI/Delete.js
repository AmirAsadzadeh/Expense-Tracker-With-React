import React from "react";
import "./Delete.css";

function Delete(props) {
  return (
    <button className="delete-btn" onClick={props.onClick}>
      <img src="https://img.icons8.com/fluency/24/undefined/filled-trash.png" />
    </button>
  );
}
export default Delete;
