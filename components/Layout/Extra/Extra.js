import React from "react";
import cn from "classnames";

import classes from "./Extra.module.css";

const Extra = ({ children }) => {
  return <div className={cn(classes.Extra)}>{children}</div>;
};

export default Extra;
