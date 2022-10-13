/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import LogRocket from "logrocket";

import App from "./App";
import ErrorBoundary from "components/ErrorBoundaryComponent";

import "./index.css";
import "./styles/styles.css";
import "./styles/admin.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* LogRocket.init("pbnfxi/izon-voice");

LogRocket.identify("f6d5211e-302e-470b-bd42-fbef963cd14", {
  subscriptionType: "pro",
});
 */

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Router>
        <App />
      </Router>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);
