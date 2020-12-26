import React from "react";
import Stack from "../components/Stack/Stack";
import TextTitle from "../components/TextTitle/TextTitle";

export default {
  title: "Typography",
};

export const Title = () => (
  <Stack column>
    <TextTitle bold={false}>Title</TextTitle>
    <TextTitle>Title</TextTitle>
  </Stack>
);
