import React from "react";
import Card from "./Card";
import data from "../data";
import "./Hero.css";

export default function () {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div className="hero">
      <div>{cards}</div>
    </div>
  );
}
