import React from "react";
import Counter from "../../UI/counter/Counter";
import "./Meal.css";

function Meal(props) {
  return (
    <div className="meal">
      <div className="meal-img">
        <img src={props.meal.img} alt="" />
      </div>
      <div className="details">
        <h1>{props.meal.title}</h1>
        <p>{props.meal.desc}</p>
        <div className="price">
          <span>{props.meal.price}</span>
          <div>
            <Counter meal={props.meal} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meal;
