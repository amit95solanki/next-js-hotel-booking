import * as React from "react";

import { Box, Grid, Button } from "@mui/material";

import Card from "@mui/material/Card";
import CssBaseline from "@mui/material/CssBaseline";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "next/link";
const Hotels = ({ hotels }) => {
  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {Array.isArray(hotels) && hotels.length > 0 ? (
          hotels.map((e) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={e._id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia component="img" alt="green iguana" height="140" image={e.banner} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {e.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {e.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="outlined" color="error">
                    Book Now
                  </Button>

                  <Link href={`/hotel/${e?._id}`}>
                    <Button size="small" variant="outlined" sx={{ marginLeft: "10px" }}>
                      See Details
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Grid>
      {/*  */}

      {/* <Box>
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
                            <Button size="small" variant="outlined" color="error">
                              Book Now
                            </Button>

                            <Link href={`/hotel/${e?._id}`}>
                              <Button size="small" variant="outlined" sx={{ marginLeft: "10px" }}>
                                See Details
                              </Button>
                            </Link>
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
          </Box> */}
    </>
  );
};

export default Hotels;
