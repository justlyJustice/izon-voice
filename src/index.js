/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import { BrowserRouter as Router } from "react-router-dom";
import LogRocket from "logrocket";

import App from "./App";
import ErrorBoundary from "./components/ErrorBoundaryComponent";

import "./index.css";
import "./styles/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* LogRocket.init("pbnfxi/izon-voice");

LogRocket.identify("f6d5211e-302e-470b-bd42-fbef963cd14", {
  subscriptionType: "pro",
});

Sentry.init({
  dsn: "https://a4ded3fdf41b476eb3e94798ec561003@o518596.ingest.sentry.io/5627752",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: process.env.NODE_ENV === "development" ? 1.0 : 2.0,
});
 */
ReactDOM.render(
  <>
    <React.StrictMode>
      <ErrorBoundary>
        <Router>
          <App />
        </Router>
      </ErrorBoundary>
    </React.StrictMode>
  </>,
  document.getElementById("root")
);
