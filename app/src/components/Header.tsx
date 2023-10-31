import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";

export const Header = () => {
  return (
    <header>
      <AppBar sx={{ background: "#fff" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <RequestQuoteIcon
              sx={{ color: "#121212", fontSize: "3rem", marginRight: "1rem" }}
            />
            <Typography variant="h5" noWrap sx={{ color: "#121212" }}>
              iTrackBud
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};
