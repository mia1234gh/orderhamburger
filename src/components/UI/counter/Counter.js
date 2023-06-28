import { React, useContext } from "react";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { MdAddCircleOutline } from "react-icons/md";
import CardContext from "../../../store/cardContext";
import "./Counter.css";

function Counter(props) {
  const addButtonHandler = () => {
    // props.onAdd(props.meal);
    ctx.addItem(props.meal);
  };
  const subButtonHandler = () => {
    // props.onSub(props.meal);
    ctx.removerItem(props.meal);
  };
  const ctx = useContext(CardContext);
  return (
    <div className="counter">
      {/* 判断：有无amount且值不为0 */}
      {props.meal.amount && props.meal.amount !== 0 ? (
        <>
          <AiOutlineMinusCircle
            className="minus"
            onClick={subButtonHandler}
          ></AiOutlineMinusCircle>
          <span>{props.meal.amount}</span>
        </>
      ) : null}
      {/* 增加按钮一定存在 */}
      <MdAddCircleOutline className="add" onClick={addButtonHandler} />
    </div>
  );
}

export default Counter;
