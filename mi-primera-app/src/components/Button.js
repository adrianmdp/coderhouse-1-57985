import React from "react";

const Button = ({
  children,
  id,
  className,
  onClick,
  type,
  value,
  style,
  disabled,
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
      {children}
    </button>
  );
};

export default Button;
