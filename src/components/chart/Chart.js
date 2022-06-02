import React from "react";
import ChartBar from "./ChartBar";
import Card from "../UI/Card";
import "./Chart.css";

function Chart(props) {
  let monthesSum = {
    Jan: 0,
    Feb: 0,
    Mar: 0,
    Apr: 0,
    May: 0,
    Jun: 0,
    Jul: 0,
    Aug: 0,
    Sep: 0,
    Dec: 0,
    Oct: 0,
    Nov: 0,
  };

  if (props.filteredYear === "all") {
    for (let item of props.expenses) {
      monthesSum[item.date.toLocaleDateString("en-US", { month: "short" })] +=
        Number(item.amount);
    }
  } else {
    for (let item of props.filteredExpenses) {
      monthesSum[item.date.toLocaleDateString("en-US", { month: "short" })] +=
        Number(item.amount);
    }
  }

  const totalValue = Object.values(monthesSum).reduce(
    (acc, cur) => cur + acc,
    0
  );

  return (
    <Card className="chart">
      {Object.entries(monthesSum).map((item) => {
        return (
          <ChartBar
            key={item[0]}
            label={item[0]}
            amount={item[1]}
            totalValue={totalValue}
          ></ChartBar>
        );
      })}
    </Card>
  );
}

export default Chart;
