import React from "react";
import "../styles/button.css";
function Button({ text, onClick }) {
  return (
    <div className="btnDiv">
      <button onClick={onClick} className="btn">
        {text}
      </button>
    </div>
  );
}

export default Button;
