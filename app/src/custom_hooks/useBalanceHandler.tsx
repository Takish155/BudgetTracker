import { useEffect, useState } from "react";
import { UseAddTransactionFormContext } from "../context/useTransactionFormContext";

export const useBalanceHandler = () => {
  const { transactionData } = UseAddTransactionFormContext() || {};
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);

  useEffect(() => {
    setBalance(0);
    setIncome(0);
    setExpenses(0);
    console.log(transactionData, "Wassup team!");
    transactionData?.forEach((ele) => {
      if (ele.transactionType === "Income") {
        setBalance((prevBalance) => prevBalance + ele.amount);
        setIncome((prevIncome) => prevIncome + ele.amount);
      } else {
        setBalance((prevBalance) => prevBalance - ele.amount);
        setExpenses((prevBalance) => prevBalance + ele.amount);
      }
    });
  }, [transactionData]);

  const money = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumSignificantDigits: 3,
  });
  return { money, balance, income, expenses };
};

export type BalanceTypes = {
  money: Intl.NumberFormat;
  balance: number;
  income: number;
  expenses: number;
};
