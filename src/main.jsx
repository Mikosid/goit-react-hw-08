import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
// persistor;
// import { PersistGate } from "redux-persist/integration/react";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </StrictMode>
);
