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
import date from "date-and-time";
import { v4 as uuidv4 } from "uuid";

const now = new Date();
const currentDate = date.format(now, "ddd, MMM DD YYYY");

export type AddTransactionForm = {
  transactionType: "Income" | "Expenses";
  category:
    | "Groceries"
    | "Utilities"
    | "Entertainment"
    | "Necessity"
    | "Salary";
  name: string;
  amount: number;
  date: string;
  id: string;
};

export type RegisterForm = {
  transactionType: "Income" | "Expenses";
  category:
    | "Groceries"
    | "Utilities"
    | "Entertainment"
    | "Necessity"
    | "Salary";
  name: string;
  amount: number;
};

const schema = z.object({
  transactionType: z.enum(["Income", "Expenses"], {
    errorMap: () => ({ message: "Please select something." }),
  }),
  category: z.enum(
    ["Groceries", "Utilities", "Entertainment", "Necessity", "Salary"],
    {
      errorMap: () => ({ message: "Please select something." }),
    }
  ),
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
      date: currentDate,
      id: uuidv4(),
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

  const onSubmit = (data: RegisterForm) => {
    setTransactionData((prevTransaction) => [
      ...prevTransaction,
      {
        transactionType: data.transactionType,
        category: data.category,
        name: data.name,
        amount: data.amount,
        date: currentDate,
        id: uuidv4(),
      },
    ]);
  };

  const onRemove = (id: string) => {
    setTransactionData(
      transactionData.filter((ele) => {
        return ele.id !== id;
      })
    );
  };

  return {
    register,
    handleSubmit,
    reset,
    errors,
    onSubmit,
    transactionData,
    onRemove,
  };
}

export type UseTransactionFormType = {
  register: UseFormRegister<RegisterForm>;
  handleSubmit: UseFormHandleSubmit<RegisterForm>;
  reset: UseFormReset<RegisterForm>;
  errors: FieldErrors<AddTransactionForm>;
  onSubmit: (data: RegisterForm) => void;
  transactionData: AddTransactionForm[];
  onRemove: (id: string) => void;
};
