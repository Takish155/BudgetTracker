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
              {/* <TableRow>
                <TableCell>9/11/2023</TableCell>
                <TableCell sx={{ color: "red" }} align="right">
                  23,000$
                </TableCell>
                <TableCell align="right">Buying stuff</TableCell>
                <TableCell align="right">Entertainment</TableCell>
                <TableCell align="right">
                  <Button color="error" variant="outlined">
                    Remove
                  </Button>
                </TableCell>
              </TableRow> */}
              {transactionData?.map((ele, index) => {
                return (
                  <TableRow key={index + 292}>
                    <TableCell>Today</TableCell>
                    <TableCell align="right">${ele.amount}</TableCell>
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
