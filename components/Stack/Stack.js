import React from "react";
import cn from "classnames";

import classes from "./Stack.module.css";

const Stack = ({ gap = 10, column, children }) => {
  return (
    <div className={cn(classes.Stack, column && classes.Column)} style={{ "--gap": `${gap}px` }}>
      {children}
    </div>
  );
};

export default Stack;
