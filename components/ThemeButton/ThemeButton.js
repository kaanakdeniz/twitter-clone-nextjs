import React from "react";
import cn from "classnames";
import Button from "../Button/Button";

import classes from "./ThemeButton.module.css";

const ThemeButton = ({ className, fullSize, children, ...props }) => {
  return (
    <Button className={cn(classes.Button, fullSize && classes.FullSize, className)} {...props}>
      {children}
    </Button>
  );
};

export default ThemeButton;
