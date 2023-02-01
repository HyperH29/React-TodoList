import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// Import the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Import redux toolkit and bootstrap
import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// This video helped me solve an issue where the todo was not being added to the list
// https://www.youtube.com/watch?v=fiesH6WU63I
