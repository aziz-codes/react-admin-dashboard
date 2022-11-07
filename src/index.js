import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

root.render(
  <Auth0Provider
    domain="dev-atjv83weiubjlwli.us.auth0.com"
    clientId="rNLE69Xp4zOgQuGo6QF4ICAdYSuzfqft"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
