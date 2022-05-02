import { Children } from "react";
import "./Card.css";

function Card(props) {
  console.log(props)
  return <div className={`card  ${props.classes}`}>{props.children}</div>;
}

export default Card;