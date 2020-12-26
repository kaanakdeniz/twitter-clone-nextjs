import React from "react";
import cn from "classnames";
import Button from "../Button/Button";

import classes from "./NavButton.module.css";

const NavButton = ({ notify, selected, children, ...props }) => {
  return (
    <Button className={cn(classes.NavButton, selected && classes.NavButtonSelected)} {...props}>
      {children}
      {notify && <span className={classes.Notify}>{notify}</span>}
    </Button>
  );
};

export default NavButton;
