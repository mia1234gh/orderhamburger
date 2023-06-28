import { React, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./Search.css";

function Search(props) {
  const inputChangeHandler = (e) => {
    const keyword = e.target.value.trim();
    props.onFilter(keyword);
  };
  return (
    <div className="search">
      <div className="search-area">
        <input
          placeholder="请输入关键字"
          type="text"
          onChange={inputChangeHandler}
        />
        <AiOutlineSearch className="icon" />
      </div>
    </div>
  );
}

export default Search;
