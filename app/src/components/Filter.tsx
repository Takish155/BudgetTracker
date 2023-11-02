import FilterAltIcon from "@mui/icons-material/FilterAlt";
import {
  Button,
  Dialog,
  DialogTitle,
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  useMediaQuery,
} from "@mui/material";

import { categoryArray } from "../assets/data/categories";
import { useState } from "react";
import { buttonStyle, inputStyle } from "../assets/Style";
import { UseFilterContext } from "../context/useTransactionFormContext";
import { Category, Transaction } from "../custom_hooks/useFilter";

export const Filter = () => {
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const { setCategory, setTransaction } = UseFilterContext() || {};
  const matches = useMediaQuery("(max-width:800px)");

  return (
    <>
      <Button
        sx={{
          color: "#121212",
          margin: "0.5rem 0.5rem",
          borderColor: "#121212",
        }}
        onClick={() => setOpenFilter(!openFilter)}
        variant="outlined"
      >
        <FilterAltIcon sx={{ fontSize: "2rem" }} />
        {matches ? "" : "Filter"}
      </Button>
      <Dialog
        open={openFilter}
        fullWidth={true}
        onClose={() => setOpenFilter(!openFilter)}
      >
        <DialogTitle>Filter</DialogTitle>
        <FormControl sx={inputStyle}>
          <FormLabel htmlFor="Transaction">Tranasaction</FormLabel>
          <Select
            onChange={(e) => setTransaction?.(e.target.value as Transaction)}
            defaultValue={"All Transactions"}
            name="Transaction"
            id="Transaction"
          >
            <MenuItem value="All Transactions">All Transaction</MenuItem>
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expenses">Expenses</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={inputStyle}>
          <FormLabel htmlFor="Category">Category</FormLabel>
          <Select
            defaultValue={"All Section"}
            name="Category"
            id="Category"
            onChange={(e) => setCategory?.(e.target.value as Category)}
          >
            <MenuItem value="All Section">All Section</MenuItem>
            {categoryArray.map((ele) => {
              return (
                <MenuItem key={ele} value={ele}>
                  {ele}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <div className="flex mt-10">
          <Button
            color="error"
            sx={buttonStyle}
            onClick={() => setOpenFilter(!openFilter)}
          >
            Close
          </Button>
          <Button
            variant="contained"
            sx={buttonStyle}
            onClick={() => {
              setOpenFilter(!openFilter);
            }}
          >
            Apply Filter
          </Button>
        </div>
      </Dialog>
    </>
  );
};
