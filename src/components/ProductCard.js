import React from "react";
import "../styles/Product.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="product-card">
        <img src={product.picture} alt={product.name} />
        <div className="product-info">
          <div className="product-name">{product.name}</div>
          <div className="product-category">{product.category}</div>
          <div className="product-price">${product.cost}</div>
        </div>
        {product.id % 3 === 0 ? (
          <div
            style={{
              position: "absolute",
              top: "5px",
              right: "5px",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "green",
            }}
          >
            <div
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                height: "100%",
                fontSize: "larger",
              }}
            >
              50%
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
