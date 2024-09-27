import { useState } from "react";
import "./Index.css";
import Todos from "./components/Todos";
import Routes from "./Routes";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}

export default App;
