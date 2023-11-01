import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  AddTransactionFormProvider,
  FilterContextProvider,
} from "./context/useTransactionFormContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AddTransactionFormProvider>
      <FilterContextProvider>
        <App />
      </FilterContextProvider>
    </AddTransactionFormProvider>
  </React.StrictMode>
);
