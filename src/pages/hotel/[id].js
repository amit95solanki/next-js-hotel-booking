import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Nav from "src/components/Nav";
import { Footer } from "src/components/Footer";
const DetailPage = ({ hotels }) => {
  console.log("++++++", hotels);
  return (
    <>
      <Nav />
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ height: "100%", marginTop: "20px" }}>
          <img src={hotels.banner} alt="hotel" width="100%" height="300rem" />

          <Stack
            direction={{ xs: "column", sm: "column", md: "column", lg: "row", xl: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4, lg: 5, xl: 6 }}
          >
            <Box>
              <div className="thumbs">
                <div className="box">
                  {/* <img
                    src="https://images.unsplash.com/photo-1679581858563-3c808d23f0fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODE0OTMyMjM&ixlib=rb-4.0.3&q=80&w=400"
                    alt=""
                  /> */}
                </div>

                {hotels &&
                  hotels.gallery.map((image, index) => (
                    <div className="box" key={index}>
                      <img src={image} alt={`Image ${index + 1}`} />
                    </div>
                  ))}
              </div>
            </Box>

            <Box sx={{ padding: "20px" }}>
              <Typography variant="h6" gutterBottom sx={{ marginTop: "30px" }}>
                {hotels.name}
              </Typography>

              <Typography variant="subtitle2" gutterBottom>
                {hotels.description}
              </Typography>

              <Typography variant="h6" gutterBottom sx={{ marginTop: "20px" }}>
                FACILITY
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "column", md: "row", lg: "row", xl: "row" }}
                spacing={{ xs: 1, sm: 2, md: 2, lg: 3, xl: 3 }}
              >
                <Typography variant="subtitle2" gutterBottom>
                  FACILITY
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  FACILITY
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  FACILITY
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  FACILITY
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  FACILITY
                </Typography>
              </Stack>
              <Typography variant="h6" gutterBottom sx={{ marginTop: "20px" }}>
                LOCATION
              </Typography>

              <Typography variant="subtitle2" gutterBottom>
                {hotels.location}
              </Typography>
              <Box
                sx={{
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  marginRight: "30px",
                  marginBottom: "30px",
                }}
              >
                <Button variant="outlined" color="error" sx={{ marginRight: "20px" }}>
                  Price: {hotels.price} ₹
                </Button>
                <Button variant="outlined" color="error">
                  Book Now
                </Button>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export async function getServerSideProps(ctx) {
  try {
    const res = await fetch(`http://localhost:3000/api/hotel/${ctx.query.id}`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    console.log(data);
    return {
      props: {
        hotels: data.hotel,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return {
      props: {
        hotels: null, // or handle the error as needed
      },
    };
  }
}

export default DetailPage;
