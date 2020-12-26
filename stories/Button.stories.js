import React from "react";
import { Home } from "../components/Icons";
import Button from "../components/Button/Button";
import NavButton from "../components/NavButton/NavButton";
import ThemeButton from "../components/ThemeButton/ThemeButton";
import TitleBold from "../components/TextTitle/TextTitle";
import Stack from "../components/Stack/Stack";

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
export const Theme = () => (
  <Stack column gap={10}>
    <ThemeButton>Normal</ThemeButton>
    <ThemeButton fullWidth>Full Width</ThemeButton>
    <ThemeButton fullWidth fullSize>
      Full Size
    </ThemeButton>
  </Stack>
);
