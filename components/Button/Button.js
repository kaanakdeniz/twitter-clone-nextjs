import React from "react";
import cn from "classnames";
import classes from "./Button.module.css";

const Button = ({ children, className, ...props }) => {
  return (
    <button type="button" className={cn(classes.Button, className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
