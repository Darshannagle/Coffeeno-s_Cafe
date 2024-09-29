import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <BrowserRouter>
    <StyledEngineProvider injectFirst>
      <ToastContainer></ToastContainer>
      <App />
    </StyledEngineProvider>
  </BrowserRouter>
);
