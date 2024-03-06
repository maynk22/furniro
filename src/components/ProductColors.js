import React from "react";

function ProductColors({ colors, selectedColor, setSelectedColor }) {
  return (
    <div>
      <p style={{ color: "#9F9F9F" }}>Colors</p>
      <div style={{ display: "flex", gap: "10px" }}>
        {colors.map((color, index) => (
          <div
            key={index}
            onClick={() => setSelectedColor(color)}
            style={{
              padding: "10px 15px",
              borderRadius: "5px",
              cursor: "pointer",
              backgroundColor: selectedColor === color ? "#B88E2F" : "#F9F1E7",
              color: selectedColor === color ? "white" : "black",
              fontWeight: 500,
            }}
          >
            {color}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductColors;
