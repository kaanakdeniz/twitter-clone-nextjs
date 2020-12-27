import React from "react";
import cn from "classnames";
import classes from "./TextBody.module.css";

const TextBody = ({ bold = false, className, children, ...props }) => {
  return (
    <span className={cn(classes.TextBody, bold && classes.Bold, className)} {...props}>
      {children}
    </span>
  );
};

export default TextBody;
