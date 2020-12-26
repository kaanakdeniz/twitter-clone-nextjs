import React from "react";
import { Home } from "../components/Icons";
import Button from "../components/Button/Button";
import NavButton from "../components/NavButton/NavButton";
import TitleBold from "../components/TitleBold/TitleBold";

export default {
  title: "Button",
};

export const Normal = () => <Button>Save</Button>;
export const Navigation = () => (
  <NavButton>
    <Home />
    <TitleBold>Home</TitleBold>
  </NavButton>
);
