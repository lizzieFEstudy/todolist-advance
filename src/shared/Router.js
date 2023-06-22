import GlobalStyle from "GlobalStyle";
import Layout from "components/Layout";
import Detail from "pages/Detail";
import Todo from "pages/Todo";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<Todo />}></Route>
          <Route path="detail/:id" element={<Detail />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
