import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  AddTransactionFormProvider,
  BalanceHandlerContextProvider,
  FilterContextProvider,
} from "./context/useTransactionFormContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AddTransactionFormProvider>
      <FilterContextProvider>
        <BalanceHandlerContextProvider>
          <App />
        </BalanceHandlerContextProvider>
      </FilterContextProvider>
    </AddTransactionFormProvider>
  </React.StrictMode>
);
