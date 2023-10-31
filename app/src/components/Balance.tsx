import { Container, Paper } from "@mui/material";

export const Balance = () => {
  const paperStyle = { width: "30%", minWidth: "200px" };
  return (
    <section className="mt-28 h-40 mb-10">
      <Container
        sx={{
          width: "90%",
          margin: "auto auto",
          height: "10rem",
        }}
      >
        <div className="flex gap-10 justify-center h-40">
          <Paper sx={paperStyle}>
            <h3 className="font-bold text-2xl uppercase ml-5 mt-5">Income</h3>
            <p className="text-green-700 text-center text-3xl mb-5">$100,000</p>
          </Paper>
          <Paper sx={paperStyle}>
            <h3 className="font-bold text-2xl uppercase ml-5 mt-5">Income</h3>
            <p className="text-center text-3xl mb-5">$100,000</p>
          </Paper>
          <Paper sx={paperStyle}>
            <h3 className="font-bold text-2xl uppercase ml-5 mt-5">Expenses</h3>
            <p className="text-red-700 text-center text-4xl mb-5">$100,000</p>
          </Paper>
        </div>
      </Container>
    </section>
  );
};
