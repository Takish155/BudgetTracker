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
            console.log("hello world!", data);
            onSubmit?.(data);
          })}
        >
          <FormControl
            sx={inputStyle}
            error={Boolean(errors?.transactionType?.message)}
          >
            <FormLabel htmlFor="transactionType">Transaction Type</FormLabel>
            <Select
              {...register?.("transactionType")}
              error={Boolean(errors?.transactionType)}
              name="transactionType"
              id="transactionType"
              defaultValue={"Select"}
            >
              <MenuItem value="Select">Select</MenuItem>
              <MenuItem value="Income">Income</MenuItem>
              <MenuItem value="Expenses">Expenses</MenuItem>
            </Select>
            {errors?.transactionType?.message ? (
              <p className=" text-xs ml-4 mt-1 text-red-600">
                {errors.transactionType.message}
              </p>
            ) : (
              ""
            )}
          </FormControl>
          <FormControl sx={inputStyle}>
            <FormLabel htmlFor="category">Category</FormLabel>
            <Select
              {...register?.("category")}
              id="category"
              name="category"
              defaultValue={"Select"}
            >
              <MenuItem value="Select">Select</MenuItem>
              {categoryArray.map((ele) => {
                return (
                  <MenuItem key={ele} value={ele}>
                    {ele}
                  </MenuItem>
                );
              })}
            </Select>
            {errors?.category?.message ? (
              <p className=" text-xs ml-4 mt-1 text-red-600">
                {errors.category.message}
              </p>
            ) : (
              ""
            )}
          </FormControl>
          <FormControl sx={inputStyle}>
            <FormLabel htmlFor="transactionName" sx={formLabelStyle}>
              Transaction Name
            </FormLabel>
            <TextField
              error={Boolean(errors?.name)}
              helperText={errors?.name?.message}
              {...register?.("name")}
              id="name"
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
              defaultValue={0}
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
