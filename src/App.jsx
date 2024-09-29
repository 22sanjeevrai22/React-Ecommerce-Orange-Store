import "./Index.css";
import { PersistGate } from "redux-persist/integration/react";
import Routes from "./Routes";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
          <ToastContainer />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
