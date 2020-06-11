import React from "react";
import "./card-list.style.css";
import { Card } from "../card/card.component.jsx";

export const Cardlist = (props) => {
  console.log(props);
  return (
    <div className="card-list">
      {props.superhero.map((hero) => (
        <Card key={hero.id} hero={hero} />
      ))}
    </div>
  );
};
