import { useEffect, useState } from "react";
import { AddTransactionForm } from "./useTransactionForm";
import { UseAddTransactionFormContext } from "../context/useTransactionFormContext";

type Transaction = "All Transactions" | "Income" | "Expenses";
type Category =
  | "All Section"
  | "Groceries"
  | "Utilities"
  | "Entertainment"
  | "Necessity";

export const useFilter = () => {
  const { transactionData } = UseAddTransactionFormContext() || {};

  const [transaction, setTransaction] =
    useState<Transaction>("All Transactions");
  const [category, setCategory] = useState<Category>("All Section");

  const [filteredData, setFilteredData] = useState<AddTransactionForm[]>(
    transactionData ?? []
  );

  console.log(transactionData);

  useEffect(() => {
    let newFilteredTransaction = transactionData;

    if (transaction !== "All Transactions") {
      newFilteredTransaction = newFilteredTransaction?.filter((ele) => {
        return ele.transactionType === transaction;
      });
    }

    if (category !== "All Section") {
      newFilteredTransaction = newFilteredTransaction?.filter((ele) => {
        return ele.category === category;
      });
    }
    setFilteredData(newFilteredTransaction ?? []);
  }, [transactionData, transaction, category]);

  return { setTransaction, setCategory, filteredData };
};

export type UseFilterTypes = {
  setTransaction: React.Dispatch<React.SetStateAction<Transaction>>;
  setCategory: React.Dispatch<React.SetStateAction<Category>>;
  filteredData: AddTransactionForm[];
};
