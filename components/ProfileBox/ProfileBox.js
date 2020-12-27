import React from "react";
import cn from "classnames";

import Button from "../Button/Button";
import Photo from "../Photo/Photo";
import { ArrowBottom } from "../Icons";
import TextBody from "../TextBody/TextBody";

import classes from "./ProfileBox.module.css";

const ProfileBox = ({ slug = "@kaanakdeniz", userName = "Kaan Akdeniz" }) => {
  return (
    <Button className={cn(classes.ProfileBox)}>
      <Photo />
      <div className={classes.Body}>
        <TextBody bold>{userName}</TextBody>
        <TextBody className={classes.Slug}>{slug}</TextBody>
      </div>
      <ArrowBottom className={classes.Icon} />
    </Button>
  );
};

export default ProfileBox;
