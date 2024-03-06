import React from "react";

function ProductSize({ sizes, selectedSize, setSelectedSize }) {
  return (
    <div>
      <p style={{ color: "#9F9F9F" }}>Size</p>
      <div style={{ display: "flex", gap: "10px" }}>
        {sizes.map((size, index) => (
          <div
            key={index}
            onClick={() => setSelectedSize(size)}
            style={{
              padding: "10px 15px",
              borderRadius: "5px",
              cursor: "pointer",
              backgroundColor: selectedSize === size ? "#B88E2F" : "#F9F1E7",
              color: selectedSize === size ? "white" : "black",
              fontWeight: 500,
            }}
          >
            {size}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductSize;
