import React from "react";
import cn from "classnames";
import classes from "./TextTitle.module.css";

const TextTitle = ({ bold = true, children }) => {
  return <h2 className={cn(classes.TextTitle, bold && classes.Bold)}>{children}</h2>;
};

export default TextTitle;
