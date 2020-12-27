import React from "react";
import { Bookmark, Explore, Home, Lists, Messages, More, Notification, Profile, Twitter } from "../Icons";
import NavButton from "../NavButton/NavButton";
import TitleBold from "../TextTitle/TextTitle";

import classes from "./Navigation.module.css";

const Navigation = ({ flat = false, selectedKey }) => {
  return (
    <nav className={classes.Navigation}>
      <NavButton>
        <Twitter />
      </NavButton>

      <NavButton selected={selectedKey === "home"}>
        <Home />
        <TitleBold>Home</TitleBold>
      </NavButton>

      <NavButton selected={selectedKey === "explore"}>
        <Explore />
        <TitleBold>Explore</TitleBold>
      </NavButton>

      <NavButton notify={17} selected={selectedKey === "notification"}>
        <Notification />
        <TitleBold>Notification</TitleBold>
      </NavButton>

      <NavButton selected={selectedKey === "messages"}>
        <Messages />
        <TitleBold>Messages</TitleBold>
      </NavButton>

      <NavButton selected={selectedKey === "bookmark"}>
        <Bookmark />
        <TitleBold>Bookmark</TitleBold>
      </NavButton>

      <NavButton selected={selectedKey === "lists"}>
        <Lists />
        <TitleBold>Lists</TitleBold>
      </NavButton>

      <NavButton selected={selectedKey === "profile"}>
        <Profile />
        <TitleBold>Profile</TitleBold>
      </NavButton>

      <NavButton selected={selectedKey === "more"}>
        <More />
        <TitleBold>More</TitleBold>
      </NavButton>
    </nav>
  );
};

export default Navigation;
