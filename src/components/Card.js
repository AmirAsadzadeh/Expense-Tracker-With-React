import { Children } from "react";
import "./Card.css";

function Card(props) {
  return <div className={`card  ${props.className}`}>{props.children}</div>;
}

export default Card;
