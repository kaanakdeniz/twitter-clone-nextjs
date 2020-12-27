import React from "react";
import cn from "classnames";

import classes from "./Main.module.css";

const Main = ({ children }) => {
  return <div className={cn(classes.Main)}>{children}</div>;
};

export default Main;
