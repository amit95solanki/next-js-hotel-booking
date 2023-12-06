import * as React from "react";

import { Box, Grid, Button } from "@mui/material";

import Card from "@mui/material/Card";
import CssBaseline from "@mui/material/CssBaseline";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Hotels = ({ hotels }) => {
  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Box sx={{ bgcolor: "#cfe8fc" }}>
            <Box sx={{ width: "100%", padding: "5px" }}>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {hotels ? (
                  hotels.map((e) => {
                    return (
                      <Grid item xs={12} sm={6} md={4} lg={3} key={e._id}>
                        <Card sx={{ maxWidth: 345 }}>
                          <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={e.banner}
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                              {e.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {e.description}
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">See Details</Button>
                          </CardActions>
                        </Card>
                      </Grid>
                    );
                  })
                ) : (
                  <p>Loading...</p>
                )}
              </Grid>
            </Box>
          </Box>
        </Container>
      </React.Fragment>
    </>
  );
};

export default Hotels;
