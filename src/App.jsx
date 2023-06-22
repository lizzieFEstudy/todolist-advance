import GlobalStyle from "GlobalStyle";
import Layout from "components/Layout";
import Todo from "pages/Todo";

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Layout>
        <Todo />
      </Layout>
    </>
  );
}

export default App;
