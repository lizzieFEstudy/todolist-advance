import React from "react";
import { S } from "./LayoutStyle";

const Layout = ({ children }) => {
  return (
    <S.LayoutBox>
      <header>
        <S.LayoutH1>My Todo List</S.LayoutH1>
      </header>

      {/* <div id="container"> */}
      <main id="main">{children}</main>
    </S.LayoutBox>
  );
};

export default Layout;
