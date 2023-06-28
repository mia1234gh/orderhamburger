// context 公共存储空间，多个组件都需要访问的数据统一存储到context，无需通过state的props层层访问
import React from "react";

const CardContext = React.createContext({
  items: [],
  totalAmount: 0,
  totalPrice: 0,
  addItem: () => {},
  removerItem: () => {},
});

export default CardContext;
