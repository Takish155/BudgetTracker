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

const inputStyle = { marginLeft: "1rem", width: "50%", marginBottom: "1rem" };
const formLabelStyle = { marginBottom: "0.5rem" };

export const TrackForm = () => {
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
        <form>
          <FormControl sx={inputStyle}>
            <FormLabel>Transaction Type</FormLabel>
            <Select>
              <MenuItem value="Income">Income</MenuItem>
              <MenuItem value="Expenses">Expenses</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={inputStyle}>
            <FormLabel>Category</FormLabel>
            <Select>
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
            <FormLabel sx={formLabelStyle}>Transaction Type</FormLabel>
            <TextField variant="outlined" />
          </FormControl>
          <FormControl sx={inputStyle}>
            <FormLabel sx={formLabelStyle}>Amount</FormLabel>
            <TextField variant="outlined" />
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
            <Button
              variant="contained"
              sx={buttonStyle}
              onClick={() => setOpenForm(!openForm)}
            >
              Submit
            </Button>
          </div>
        </form>
      </Dialog>
    </>
  );
};
