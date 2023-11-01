import { z } from "zod";
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
  useForm,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

export type AddTransactionForm = {
  transactionType: "Income" | "Expenses";
  category: "Groceries" | "Utilities" | "Entertainment" | "Necessity";
  name: string;
  amount: number;
};

const schema = z.object({
  transactionType: z.enum(["Income", "Expenses"], {
    errorMap: () => ({ message: "Transaction is required." }),
  }),
  category: z.enum(["Groceries", "Utilities", "Entertainment", "Necessity"], {
    errorMap: () => ({ message: "Category is required." }),
  }),
  name: z
    .string()
    .min(3, { message: "Name should be at least 3 characters" })
    .max(20, { message: "Name shoould be lass than 20 characters" }),
  amount: z
    .number()
    .min(1, { message: "Amount should be equal or higher than 1" })
    .max(1_000_000, {
      message: "Amount should be equal or less than 1.000,000",
    }),
});

type TransactionFormData = z.infer<typeof schema>;

export function useTransactionForm() {
  const [transactionData, setTransactionData] = useState<AddTransactionForm[]>([
    {
      transactionType: "Expenses",
      category: "Entertainment",
      name: "Buying some stuff",
      amount: 282,
    },
  ]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TransactionFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: AddTransactionForm) => {
    setTransactionData((prevTransaction) => [
      ...prevTransaction,
      {
        transactionType: data.transactionType,
        category: data.category,
        name: data.name,
        amount: data.amount,
      },
    ]);
  };

  return { register, handleSubmit, reset, errors, onSubmit, transactionData };
}

export type UseTransactionFormType = {
  register: UseFormRegister<AddTransactionForm>;
  handleSubmit: UseFormHandleSubmit<AddTransactionForm>;
  reset: UseFormReset<AddTransactionForm>;
  errors: FieldErrors<AddTransactionForm>;
  onSubmit: (data: AddTransactionForm) => void;
  transactionData: AddTransactionForm[];
};
