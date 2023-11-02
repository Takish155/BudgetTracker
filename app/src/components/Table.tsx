import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useMediaQuery,
} from "@mui/material";

import { Filter } from "./Filter";
import { TrackForm } from "./TrackForm";
import {
  UseAddTransactionFormContext,
  UseFilterContext,
} from "../context/useTransactionFormContext";

export const TableSection = () => {
  const { onRemove } = UseAddTransactionFormContext() || {};
  const { filteredData } = UseFilterContext() || {};
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <section>
      <Paper sx={{ width: "95%", margin: "0 auto" }}>
        <div className="flex justify-between">
          <Filter />
          <TrackForm />
        </div>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Category</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData?.length === 0 ? (
                <TableRow>
                  <TableCell>No data available...</TableCell>
                </TableRow>
              ) : (
                filteredData?.map((ele, index) => {
                  if (filteredData.length === 0) {
                    return (
                      <TableRow>
                        <TableCell>No data available...</TableCell>
                      </TableRow>
                    );
                  }
                  return (
                    <TableRow key={index + 292}>
                      <TableCell>{ele.date}</TableCell>
                      <TableCell
                        align="right"
                        sx={{
                          color:
                            ele.transactionType === "Income" ? "green" : "red",
                        }}
                      >
                        ${ele.amount}
                      </TableCell>
                      <TableCell align="right">{ele.name}</TableCell>
                      <TableCell align="right">{ele.category}</TableCell>
                      <TableCell align="right">
                        <Button
                          color="error"
                          variant="outlined"
                          onClick={() => onRemove?.(ele.id)}
                        >
                          {matches ? "X" : "Remove"}
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </section>
  );
};
