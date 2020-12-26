import React from "react";

import classes from "./TitleBold.module.css";

const TitleBold = ({ children }) => {
  return <h2 className={classes.TitleBold}>{children}</h2>;
};

export default TitleBold;
