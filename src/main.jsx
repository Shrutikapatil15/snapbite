import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { StoreContextProvider } from "./context/StoreContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ Needed for <Link> and <Route> */}
      <AuthContextProvider>
        <StoreContextProvider>
          <App />
        </StoreContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
