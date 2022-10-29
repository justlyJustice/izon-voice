/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import logrocketConfig from "config/logrocket";
import "react-tooltip/dist/index";

import App from "./App";
import ErrorBoundary from "components/ErrorBoundaryComponent";

import "./index.css";
import "./styles/styles.css";
import "./styles/admin.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AuthProvider } from "context/AuthContext";

logrocketConfig();

ReactDOM.render(
  <AuthProvider>
    <ErrorBoundary>
      <Router>
        <App />
      </Router>
    </ErrorBoundary>
  </AuthProvider>,
  document.getElementById("root")
);
