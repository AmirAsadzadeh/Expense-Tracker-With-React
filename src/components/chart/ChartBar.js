import React from "react";
import "./ChartBar.css";

function ChartBar(props) {
  const percentage = isNaN(props.amount / props.totalValue)
    ? 0
    : ((props.amount / props.totalValue) * 100).toFixed(0);
  return (
    <div className="chart-bar__container">
      <div className="chart-bar">
        <div
          className="chart-bar__filler"
          style={{
            height: `${percentage}%`,
          }}
        ></div>
        <p className="percentage">{`${percentage}`}</p>
      </div>
      <div className="chart-bar__label">
        <p>{props.label}</p>
      </div>
    </div>
  );
}

export default ChartBar;
