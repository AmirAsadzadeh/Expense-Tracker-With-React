import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  const monthes = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Dec",
    "Oct",
    "Nov",
  ];

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

  if (props.filteredYear === "all")
    for (let item of props.expenses) {
      monthesSum[item.date.toLocaleDateString("en-US", { month: "long" })] +=
        Number(item.amount);
    }
  else {
    for (let item of props.filteredExpenses) {
      monthesSum[item.date.toLocaleDateString("en-US", { month: "long" })] +=
        Number(item.amount);
    }
  }

  console.log(monthesSum);
  // return (
  //   <div className="chart">
  //     {props.dataPoints.map((dataPoint) => (
  //       <ChartBar
  //         key={dataPoint.label}
  //         label={dataPoint.label}
  //         value={dataPoint.value}
  //         maxValue={null}
  //       />
  //     ))}
  //   </div>
  // );
}

export default Chart;
