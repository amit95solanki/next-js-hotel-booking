import * as React from "react";
import { styled, Typography, Button, Box, Stack, TextField } from "@mui/material";
import { Footer } from "src/components/Footer";
import Link from "next/link";
import Nav from "src/components/Nav";

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

export default function index() {
  const [city, setCity] = React.useState(" ");
  return (
    <>
      <Box>
        <Nav />
        {/* <Container maxWidth="lg"> */}
        <div
          style={{
            backgroundImage: `url(/assets/hotel.jpg)`,
            backgroundSize: "100% 100%", // Make the background image responsive
            height: "40vh",
          }}
        ></div>
        {/* </Container> */}

        {/* <CssBaseline /> */}
        {/* <Container maxWidth="lg" sx={{ color: " #6366f1" }}> */}
        <Typography variant="h6" gutterBottom textAlign={"center"} sx={{ padding: "1% " }}>
          Book a Room
        </Typography>
        <Typography variant="overline" display="block" gutterBottom textAlign={"center"}>
          Discover the perfect space for you
        </Typography>
        <SearchBox>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 1, sm: 2, md: 4 }}>
            <Box sx={{ padding: "10px" }}>
              <TextField
                fullWidth
                label="Search City"
                name="search-input"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
            </Box>

            {/* <Box>
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
            </Box> */}
            <Box sx={{ paddingTop: "13px" }}>
              <Link href={`/hotel?city=${city}`}>
                <Button variant="contained" sx={{ height: "50px" }}>
                  search
                </Button>
              </Link>
            </Box>
          </Stack>
        </SearchBox>
        {/* </Container> */}
      </Box>
      {/* <Container maxWidth="lg"> */}
      {/* <Hotels /> */}
      <Footer />
      {/* </Container> */}
    </>
  );
}
