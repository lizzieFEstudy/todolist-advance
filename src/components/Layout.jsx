import React from "react";
import { S } from "./LayoutStyle";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <S.LayoutBox>
      <header>
        <S.LayoutH1>
          <Link to={`/`}>My Todo List</Link>
        </S.LayoutH1>
      </header>

      {/* <div id="container"> */}
      <main id="main">{children}</main>
    </S.LayoutBox>
  );
};

export default Layout;
