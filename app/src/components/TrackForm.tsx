import AddIcon from "@mui/icons-material/Add";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { categoryArray } from "../assets/data/categories";
import { buttonStyle } from "../assets/Style";
import { UseAddTransactionFormContext } from "../context/useTransactionFormContext";

const inputStyle = { marginLeft: "1rem", width: "50%", marginBottom: "1rem" };
const formLabelStyle = { marginBottom: "0.5rem" };

export const TrackForm = () => {
  const { register, handleSubmit, onSubmit, errors } =
    UseAddTransactionFormContext() || {};
  const [openForm, setOpenForm] = useState<boolean>(true);

  return (
    <>
      <Button
        variant="outlined"
        onClick={() => setOpenForm(!openForm)}
        sx={{ margin: "0.5rem 0.5rem" }}
      >
        <AddIcon />
        Add Transaction
      </Button>
      <Dialog
        open={openForm}
        fullWidth={true}
        onClose={() => setOpenForm(!openForm)}
      >
        <DialogTitle>Add Transaction</DialogTitle>
        <DialogContent>
          Record your transaction, be sure to fill the blanks!
        </DialogContent>
        <form
          onSubmit={handleSubmit?.((data, e) => {
            e?.preventDefault();
            onSubmit?.(data);
          })}
        >
          <FormControl sx={inputStyle}>
            <FormLabel htmlFor="transactionType">Transaction Type</FormLabel>
            <Select
              {...register?.("transactionType")}
              name="transactionType"
              id="transactionType"
              defaultValue={"Income"}
            >
              <MenuItem value="Income">Income</MenuItem>
              <MenuItem value="Expenses">Expenses</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={inputStyle}>
            <FormLabel htmlFor="category">Category</FormLabel>
            <Select
              {...register?.("category")}
              id="category"
              name="category"
              defaultValue={"Groceries"}
            >
              {categoryArray.map((ele) => {
                return (
                  <MenuItem key={ele} value={ele}>
                    {ele}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl sx={inputStyle}>
            <FormLabel htmlFor="transactionName" sx={formLabelStyle}>
              Transaction Name
            </FormLabel>
            <TextField
              error={Boolean(errors?.name)}
              helperText={errors?.name?.message}
              {...register?.("name")}
              id="transactionName"
              variant="outlined"
              name="name"
            />
          </FormControl>
          <FormControl sx={inputStyle}>
            <FormLabel htmlFor="amount" sx={formLabelStyle}>
              Amount
            </FormLabel>
            <TextField
              {...register?.("amount", { valueAsNumber: true })}
              id="amount"
              variant="outlined"
              name="amount"
            />
          </FormControl>
          <div className="flex">
            <Button
              color="error"
              variant="outlined"
              sx={buttonStyle}
              onClick={() => setOpenForm(!openForm)}
            >
              Close
            </Button>
            <Button type="submit" variant="contained" sx={buttonStyle}>
              Submit
            </Button>
          </div>
        </form>
      </Dialog>
    </>
  );
};
