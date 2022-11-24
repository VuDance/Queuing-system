import React, { FC, ButtonHTMLAttributes } from "react";
import "./index.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: any;
}
const Button: FC<ButtonProps> = ({ text, onClick, type }) => {
  return (
    <button
      className={`btn ${text === "Hủy bỏ" && "close"}`}
      onClick={onClick}
      type={type}
    >
      <p className="textBtn" style={{ marginBottom: 0 }}>
        {text}
      </p>
    </button>
  );
};

export default Button;
