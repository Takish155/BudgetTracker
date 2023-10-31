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

export const TableSection = () => {
  return (
    <>
      <Paper sx={{ width: "95%", margin: "0 auto" }}>
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
              <TableRow>
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
              </TableRow>
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
