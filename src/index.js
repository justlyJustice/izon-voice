/* eslint-disable no-unused-vars */
import React from "react";
import { hydrate, render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import logrocketConfig from "config/logrocket";
import "react-tooltip/dist/index";
import { AuthProvider } from "context/AuthContext";

import App from "./App";
import ErrorBoundary from "components/ErrorBoundaryComponent";

import "./index.css";
import "./styles/styles.css";
import "./styles/admin.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

logrocketConfig();

const APP = (
  <AuthProvider>
    <ErrorBoundary>
      <Router>
        <App />
      </Router>
    </ErrorBoundary>
  </AuthProvider>
);

const rootElement = document.getElementById("app-root");

if (rootElement.hasChildNodes()) {
  hydrate(APP, rootElement);
} else {
  render(APP, rootElement);
}
