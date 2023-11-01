import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from "@mui/material";

import { Filter } from "./Filter";
import { TrackForm } from "./TrackForm";
import { UseAddTransactionFormContext } from "../context/useTransactionFormContext";

export const TableSection = () => {
  const { transactionData } = UseAddTransactionFormContext() || {};
  return (
    <>
      <Paper sx={{ width: "95%", margin: "0 auto" }}>
        {/* <p>{transactionData && transactionData[0].name}</p> */}
        <div className="flex justify-between">
          <Filter />
          <TrackForm />
        </div>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Transaction Date</TableCell>
                <TableCell align="right">Transaction Amount</TableCell>
                <TableCell align="right">Tranasction Name</TableCell>
                <TableCell align="right">Transaction Category</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactionData?.map((ele, index) => {
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
                      <Button color="error" variant="outlined">
                        Remove
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell>Total:</TableCell>
                <TableCell align="right">23,000$</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};
