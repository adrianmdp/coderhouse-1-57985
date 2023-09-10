import React from "react";

const Button = ({
  id,
  className,
  onClick,
  type,
  value,
  style,
  disabled,
  text,
}) => {
  return (
    <button
      id={id}
      className={className}
      onClick={onClick}
      type={type}
      value={value}
      style={style}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
