import * as React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Button,
  Box,
  CssBaseline,
  Container,
  Stack,
  TextField,
} from "@mui/material";
import { Footer } from "src/components/Footer";

const Header = styled(AppBar)`
  background: #6366f1;
`;
const SearchBox = styled(Box)`
  background-color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const inputStyle = {
  padding: "10px",
  fontSize: "1rem",
  borderRadius: "4px",
  boxSizing: "border-box",
  transition: "border-color 0.3s",
  ":hover, :focus": {
    borderColor: "#5c6ac4",
    outline: "none",
  },
  "::webkit-calendar-picker-indicator": {
    filter: "invert(0.4)",
  },
  "::webkit-inner-spin-button, ::webkit-clear-button": {
    WebkitAppearance: "none",
    margin: 0,
  },
  "::webkit-calendar-picker-indicator:hover": {
    cursor: "pointer",
  },
};

export default function lp() {
  const handleSearch = () => {
    // Implement your search logic here
    // You can use the onSearch callback to pass the search value to the parent component
  };
  return (
    <>
      <Box>
        <Box sx={{ flexGrow: 1, marginBottom: "20px" }}>
          <Container maxWidth="lg">
            <Header position="static">
              <Toolbar>
                {/* <IconButton size="large" edge="start" color="#fff" aria-label="menu" sx={{ mr: 2 }}>
                  <MenuIcon />
                </IconButton> */}
                <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1, color: "#fff" }}>
                  STAY's गृह
                </Typography>

                <Button sx={{ color: "#fff" }}>Login</Button>
              </Toolbar>
            </Header>
          </Container>
        </Box>
        <Container maxWidth="lg">
          <div
            style={{
              backgroundImage: `url(/assets/hotel.jpg)`,
              backgroundSize: "100% 100%", // Make the background image responsive
              height: "40vh",
            }}
          ></div>
        </Container>

        <CssBaseline />
        <Container maxWidth="lg" sx={{ color: " #6366f1" }}>
          <Typography variant="h6" gutterBottom textAlign={"center"} sx={{ padding: "1% " }}>
            Book a Room
          </Typography>
          <Typography variant="overline" display="block" gutterBottom textAlign={"center"}>
            Discover the perfect space for you
          </Typography>
          <SearchBox>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 1, sm: 2, md: 4 }}>
              <Box sx={{ padding: "10px" }}>
                <TextField fullWidth label="Search City" name="search-input" />
              </Box>

              <Box>
                <TextField
                  id="mui-custom-date"
                  label="Date"
                  name="mui-custom-date"
                  type="date"
                  sx={inputStyle}
                  fullWidth
                />
              </Box>
              <Box>
                <TextField
                  id="mui-custom-date"
                  label="Date"
                  name="mui-custom-date"
                  type="date"
                  sx={inputStyle}
                  fullWidth
                />
              </Box>
            </Stack>
          </SearchBox>
        </Container>
      </Box>
      <Container maxWidth="lg">
        <Footer />
      </Container>
    </>
  );
}
