import { useContext, createContext, ReactNode } from "react";
import {
  UseTransactionFormType,
  useTransactionForm,
} from "../custom_hooks/useTransactionForm";

const AddTransactionFormContext = createContext<
  UseTransactionFormType | undefined
>(undefined);

export function AddTransactionFormProvider({
  children,
}: {
  children: ReactNode;
}) {
  const addTransactionFormState = useTransactionForm();
  return (
    <AddTransactionFormContext.Provider value={addTransactionFormState}>
      {children}
    </AddTransactionFormContext.Provider>
  );
}
export function UseAddTransactionFormContext() {
  return useContext<UseTransactionFormType | undefined>(
    AddTransactionFormContext
  );
}
