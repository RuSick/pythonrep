import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App.container";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./redux/store";
import "./index.scss";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </Router>,
  document.getElementById("root")
);
