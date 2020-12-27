import React from "react";
import cn from "classnames";

import classes from "./Sidebar.module.css";
import Navigation from "@/components/Navigation/Navigation";
import ThemeButton from "@/components/ThemeButton/ThemeButton";
import ProfileBox from "@/components/ProfileBox/ProfileBox";

const Sidebar = ({ flat, children }) => {
  return (
    <div className={cn(classes.Sidebar)}>
      <Navigation flat={flat} />
      <ThemeButton fullSize fullWidth>
        Tweet
      </ThemeButton>
      <ProfileBox />
    </div>
  );
};

export default Sidebar;
