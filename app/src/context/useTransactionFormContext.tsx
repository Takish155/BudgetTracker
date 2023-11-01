import { useContext, createContext, ReactNode } from "react";
import {
  UseTransactionFormType,
  useTransactionForm,
} from "../custom_hooks/useTransactionForm";
import { UseFilterTypes, useFilter } from "../custom_hooks/useFilter";

const AddTransactionFormContext = createContext<
  UseTransactionFormType | undefined
>(undefined);
const FilterContext = createContext<UseFilterTypes | undefined>(undefined);

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

export function FilterContextProvider({ children }: { children: ReactNode }) {
  const filterTransactionState = useFilter();
  return (
    <FilterContext.Provider value={filterTransactionState}>
      {children}
    </FilterContext.Provider>
  );
}

export function UseFilterContext() {
  return useContext<UseFilterTypes | undefined>(FilterContext);
}

export function UseAddTransactionFormContext() {
  return useContext<UseTransactionFormType | undefined>(
    AddTransactionFormContext
  );
}
