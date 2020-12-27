import React from "react";
import cn from "classnames";

import classes from "./Photo.module.css";

const Photo = ({ src = "https://pbs.twimg.com/profile_images/1064214229576753152/8YfeVgnU_400x400.jpg", alt }) => {
  return (
    <div className={cn(classes.Photo)}>
      <img className={classes.Img} src={src} alt={alt}></img>
    </div>
  );
};

export default Photo;
