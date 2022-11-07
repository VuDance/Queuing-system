import React, { FC, ButtonHTMLAttributes } from "react";
import "./index.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: any;
}
const Button: FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      <p className="textBtn" style={{ marginBottom: 0 }}>
        {text}
      </p>
    </button>
  );
};

export default Button;
