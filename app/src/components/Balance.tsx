import { Container, Paper } from "@mui/material";
import { UseBalanceHandlerContext } from "../context/useTransactionFormContext";

export const Balance = () => {
  const paperStyle = { width: "30%", minWidth: "200px" };
  const { money, income, balance, expenses } = UseBalanceHandlerContext() || {};

  return (
    <section className="mt-28 mb-10">
      <Container
        sx={{
          width: "100%",
          margin: "auto auto",
        }}
      >
        <Paper sx={{ padding: "2rem 0 " }}>
          <div className="flex gap-10 justify-center flex-wrap">
            <Paper sx={paperStyle}>
              <h3 className="font-bold text-2xl uppercase ml-5 mt-5">Income</h3>
              <p className="text-green-700 text-center text-3xl mb-5">
                {money?.format?.(income ?? 0)}
              </p>
            </Paper>
            <Paper sx={paperStyle}>
              <h3 className="font-bold text-2xl uppercase ml-5 mt-5">Income</h3>
              <p className="text-center text-3xl mb-5">
                {money?.format(balance ?? 0)}
              </p>
            </Paper>
            <Paper sx={paperStyle}>
              <h3 className="font-bold text-2xl uppercase ml-5 mt-5">
                Expenses
              </h3>
              <p className="text-red-700 text-center text-4xl mb-5">
                {money?.format(expenses ?? 0)}
              </p>
            </Paper>
          </div>
        </Paper>
      </Container>
    </section>
  );
};
