import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter } from "react-router-dom";
const root = document.getElementById("root");
const rootElement = createRoot(root);

rootElement.render(
  <Provider store={store}>
    <App />
    </Provider>
 
);

reportWebVitals();
