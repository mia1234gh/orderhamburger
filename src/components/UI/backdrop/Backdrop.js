import React from "react";
import ReactDOM from "react";
import "./Backdrop.css";

const backdropRoot = document.getElementById("backdropRoot");

function Backdrop(props) {
  return ReactDOM.createPortal(
    <div className="Backdrop">{props.children}</div>,
    backdropRoot
  );
}

export default Backdrop;
