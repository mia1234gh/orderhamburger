import "./App.css";

import { React, useState } from "react";
import Meals from "./components/meals/Meals";
import Search from "./components/search/Search";
import CardContext from "./store/cardContext";
import Cart from "./components/cart/Cart";

// 食物数据需要都被访问
const MealData = [
  {
    id: "1",
    title: "汉堡包",
    desc: "牛绞肉肉饼，生菜，番茄片，洋葱和渍黄瓜之外，还有凤梨（菠萝），猪绞肉肉饼，海鲜等",
    price: "12",
    img: "/img/1.jpg",
  },
  {
    id: "2",
    title: "牛肉汉堡包",
    desc: "牛绞肉肉饼，生菜，番茄片，洋葱和渍黄瓜之外，还有凤梨（菠萝），猪绞肉肉饼，海鲜等",
    price: "20",
    img: "/img/2.jpg",
  },
  {
    id: "3",
    title: "巨无霸",
    desc: "牛绞肉肉饼，生菜，番茄片，洋葱和渍黄瓜之外，还有凤梨（菠萝），猪绞肉肉饼，海鲜等",
    price: "25",
    img: "/img/3.jpg",
  },
  {
    id: "4",
    title: "什锦汉堡包",
    desc: "牛绞肉肉饼，生菜，番茄片，洋葱和渍黄瓜之外，还有凤梨（菠萝），猪绞肉肉饼，海鲜等",
    price: "18",
    img: "/img/4.jpg",
  },
  {
    id: "5",
    title: "素汉堡包",
    desc: "牛绞肉肉饼，生菜，番茄片，洋葱和渍黄瓜之外，还有凤梨（菠萝），猪绞肉肉饼，海鲜等",
    price: "13",
    img: "/img/5.jpg",
  },
  {
    id: "6",
    title: "双拼汉堡包",
    desc: "牛绞肉肉饼，生菜，番茄片，洋葱和渍黄瓜之外，还有凤梨（菠萝），猪绞肉肉饼，海鲜等",
    price: "17",
    img: "/img/6.jpg",
  },
  {
    id: "7",
    title: "巨型汉堡包",
    desc: "牛绞肉肉饼，生菜，番茄片，洋葱和渍黄瓜之外，还有凤梨（菠萝），猪绞肉肉饼，海鲜等",
    price: "18",
    img: "/img/7.jpg",
  },
];

function App() {
  const [mealsData, setMealsData] = useState(MealData);
  // 购物车数据
  const [buyData, setBuyData] = useState({
    items: [],
    totalAmount: 0,
    totalPrice: 0,
  });
  // 商品search
  const filterHandler = (keyword) => {
    // 为空
    const searchData = MealData.filter(
      (item) => item.title.indexOf(keyword) !== -1
    );
    setMealsData(searchData);
  };

  // 增加商品
  const addItem = (meal) => {
    // 复制data
    const newBuy = { ...buyData };
    // 判断：无则增加，有则不增加
    if (newBuy.items.indexOf(meal) === -1) {
      // add one meal
      newBuy.items.push(meal);
      meal.amount = 1;
    } else {
      //修改： 增加商品数量
      meal.amount += 1;
    }

    // 商品总数和总金额
    newBuy.totalAmount += 1;
    // newBuy.totalPrice = newBuy.totalPrice + meal.price;
    // 使用Number进行强制类型转换
    newBuy.totalPrice = Number(newBuy.totalPrice) + Number(meal.price);

    setBuyData(newBuy);
  };

  // 减少商品
  const removerItem = (meal) => {
    // 复制data
    const deleteBuy = { ...buyData };
    meal.amount -= 1;
    // 判断:检查是否归零
    if (meal.amount === 0) {
      // 从购物车中移除
      deleteBuy.items.splice(deleteBuy.items.indexOf(meal), 1);
    }
    // total
    deleteBuy.totalAmount -= 1;
    // deleteBuy.totalPrice = deleteBuy.totalPrice - meal.price;
    // bug:加法变成拼接字符串
    deleteBuy.totalPrice = Number(deleteBuy.totalPrice) - Number(meal.price);

    setBuyData(deleteBuy);
  };

  return (
    <CardContext.Provider value={{ ...buyData, addItem, removerItem }}>
      <div className="order-app">
        <Search onFilter={filterHandler} />
        <Meals mealsData={mealsData} />
        <Cart />
      </div>
    </CardContext.Provider>
  );
}

export default App;
