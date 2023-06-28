import React from "react";
import Meal from "./meal/Meal";
import "./Meals.css";
function Meals(props) {
  return (
    // 将滚动条设置给meals
    <div className="meals">
      {/* 数据整体传给meal */}
      {props.mealsData.map((item) => (
        <Meal key={item.id} meal={item} />
      ))}
    </div>
  );
}

export default Meals;
