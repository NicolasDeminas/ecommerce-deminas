import React from "react";
import "./CartWidget.css";

const CartWidget = ({ item }) => {
  return (
    <div>
      <button>
        <img src='IconShopCart2.png' />
        <p>{item || 0}</p>
      </button>
    </div>
  );
};

export default CartWidget;
