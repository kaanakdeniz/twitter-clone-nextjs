import React from "react";
import useWindowSize from "hooks/useWindowSize";

import Layout from "../components/Layout/Layout";
import Sidebar from "../components/Layout/Sidebar/Sidebar";
import Main from "../components/Layout/Main/Main";
import Extra from "../components/Layout/Extra/Extra";

import CONSTANTS from "../constants";

const HomePage = () => {
  const size = useWindowSize();

  return (
    <Layout>
      <Sidebar flat={size.width < CONSTANTS.DESKTOP_SIZE}>sidebar</Sidebar>
      <Main>{JSON.stringify(size)}</Main>
      {size.width > CONSTANTS.TABLET_SIZE && <Extra>extra</Extra>}
    </Layout>
  );
};

export default HomePage;
