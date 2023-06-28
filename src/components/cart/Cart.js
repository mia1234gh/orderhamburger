import { React, useContext } from "react";
import "./Cart.css";
import { BsFillCartFill } from "react-icons/bs";
import CardContext from "./../../store/cardContext";

function Cart(props) {
  const ctx = useContext(CardContext);
  return (
    <div className="cart">
      <div className="icon-area">
        <BsFillCartFill className="icon" />
        {/* 判断：数量为0，总数不显示 */}
        {ctx.totalAmount === 0 ? null : (
          <span className="total-amount">{ctx.totalAmount}</span>
        )}
      </div>
      {/* 总数为0，价格不显示 */}
      {ctx.totalAmount === 0 ? (
        <p className="not">未选购商品</p>
      ) : (
        <p className="total-price">¥{ctx.totalPrice}</p>
      )}
      {/* 总数为0，button样式改变 */}
      {ctx.totalAmount === 0 ? (
        <button className="disabled">去结算</button>
      ) : (
        <button className="buy">去结算</button>
      )}
    </div>
  );
}

export default Cart;
