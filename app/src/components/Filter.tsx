import FilterAltIcon from "@mui/icons-material/FilterAlt";
import {
  Button,
  Dialog,
  DialogTitle,
  FormControl,
  FormLabel,
  MenuItem,
  Select,
} from "@mui/material";

import { categoryArray } from "../assets/data/categories";
import { useState } from "react";
import { buttonStyle, inputStyle } from "../assets/Style";

export const Filter = () => {
  const [openFilter, setOpenFilter] = useState<boolean>(false);
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
        Filter
      </Button>
      <Dialog
        open={openFilter}
        fullWidth={true}
        onClose={() => setOpenFilter(!openFilter)}
      >
        <DialogTitle>Filter</DialogTitle>
        <FormControl sx={inputStyle}>
          <FormLabel>Tranasaction</FormLabel>
          <Select>
            <MenuItem>All Transaction</MenuItem>
            <MenuItem>Income</MenuItem>
            <MenuItem>Expenses</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={inputStyle}>
          <FormLabel>Category</FormLabel>
          <Select>
            <MenuItem>All Category</MenuItem>
            {categoryArray.map((ele) => {
              return <MenuItem key={ele}>{ele}</MenuItem>;
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
