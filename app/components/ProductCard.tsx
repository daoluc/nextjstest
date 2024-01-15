import React from "react";
import AddToCart from "./AddToCart";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className="my-5 p-5">
      <AddToCart />
    </div>
  );
};

export default ProductCard;
