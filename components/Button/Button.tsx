import React from "react";
import styles from "./Button.module.scss";
import styleNames from "../../utilities/style-names";

export type ButtonProps = {
  text: string;
  theme?: "Primary" | "Secondary" | string[];
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  size?: 1 | 2 | 3;
};

export const Button = ({
  text,
  theme,
  type = "button",
  disabled = false,
  size = 1,
}: ButtonProps) => {
  const buttonSize = size === 2 ? "Medium" : size === 3 ? "Large" : null;
  return (
    <button
      className={styleNames(styles, ["Button", theme, buttonSize])}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
