import { useContext, createContext, ReactNode } from "react";
import {
  UseTransactionFormType,
  useTransactionForm,
} from "../custom_hooks/useTransactionForm";
import { UseFilterTypes, useFilter } from "../custom_hooks/useFilter";
import {
  BalanceTypes,
  useBalanceHandler,
} from "../custom_hooks/useBalanceHandler";

const AddTransactionFormContext = createContext<
  UseTransactionFormType | undefined
>(undefined);
const FilterContext = createContext<UseFilterTypes | undefined>(undefined);
const BalanceHandlerContext = createContext<BalanceTypes | undefined>(
  undefined
);

export const AddTransactionFormProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const addTransactionFormState = useTransactionForm();
  return (
    <AddTransactionFormContext.Provider value={addTransactionFormState}>
      {children}
    </AddTransactionFormContext.Provider>
  );
};

export const FilterContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const filterTransactionState = useFilter();
  return (
    <FilterContext.Provider value={filterTransactionState}>
      {children}
    </FilterContext.Provider>
  );
};

export const BalanceHandlerContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const balanceHandlerState = useBalanceHandler();
  return (
    <BalanceHandlerContext.Provider value={balanceHandlerState}>
      {children}
    </BalanceHandlerContext.Provider>
  );
};

export const UseFilterContext = () => {
  return useContext<UseFilterTypes | undefined>(FilterContext);
};

export const UseAddTransactionFormContext = () => {
  return useContext<UseTransactionFormType | undefined>(
    AddTransactionFormContext
  );
};

export const UseBalanceHandlerContext = () => {
  return useContext<BalanceTypes | undefined>(BalanceHandlerContext);
};
