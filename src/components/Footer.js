import { Box, Stack } from "@mui/system";
import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
export const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#EFEEFF", marginTop: "50px" }}>
      <Stack>
        <Grid container spacing={2}>
          <Grid item sm={12} lg={6}>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "36px",
                lineHeight: "44px",
                color: "#6759FF",
                margin: "90px",
                marginBottom: "0px",
              }}
            >
              LOGO
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "190%",
                color: "#6F767E",
                margin: "90px",
                marginTop: "30px",
              }}
            >
              The world’s first and largest digital marketplace for crypto collectibles and
              non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital assets. Ut enim
              ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi
              ut aliquid ex ea commodi consequatur
            </Typography>
          </Grid>
          <Grid item lg={2} sm={6} sx={{ marginLeft: { xs: "60px", lg: "0px" } }}>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "24px",
                lineHeight: "160%",
                color: "#6759FF",
                marginTop: "90px",
                marginBottom: "30px",
              }}
            >
              MENU
            </Typography>

            <Typography
              sx={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "18px",
                lineHeight: "190.9%",
                color: "#6F767E",
              }}
            >
              Home{" "}
            </Typography>

            <Typography
              sx={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "18px",
                lineHeight: "190.9%",
                color: "#6F767E",
              }}
            >
              Service
            </Typography>

            <Typography
              sx={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "18px",
                lineHeight: "190.9%",
                color: "#6F767E",
              }}
            >
              About us
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "18px",
                lineHeight: "190.9%",
                color: "#6F767E",
              }}
            >
              Blog{" "}
            </Typography>
          </Grid>

          <Grid item lg={2} sm={6} sx={{ marginLeft: { xs: "50px", lg: "0px" } }}>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "24px",
                lineHeight: "160%",
                color: "#6759FF",
                marginTop: "90px",
                marginBottom: "30px",
              }}
            >
              Service
            </Typography>

            <Typography
              sx={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "18px",
                lineHeight: "190.9%",
                color: "#6F767E",
              }}
            >
              Home{" "}
            </Typography>

            <Typography
              sx={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "18px",
                lineHeight: "190.9%",
                color: "#6F767E",
              }}
            >
              Service
            </Typography>

            <Typography
              sx={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "18px",
                lineHeight: "190.9%",
                color: "#6F767E",
              }}
            >
              About us
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "18px",
                lineHeight: "190.9%",
                color: "#6F767E",
              }}
            >
              Blog{" "}
            </Typography>
          </Grid>

          <Grid item lg={2} xs={12} sx={{ marginLeft: { xs: "33%", lg: "0px" } }}>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "24px",
                lineHeight: "160%",
                color: "#6759FF",
                marginTop: "90px",
                marginBottom: "30px",
              }}
            >
              Contact us
            </Typography>

            <Typography
              sx={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "18px",
                lineHeight: "190.9%",
                color: "#6F767E",
              }}
            >
              Home{" "}
            </Typography>

            <Typography
              sx={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "18px",
                lineHeight: "190.9%",
                color: "#6F767E",
              }}
            >
              Service
            </Typography>

            <Typography
              sx={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "18px",
                lineHeight: "190.9%",
                color: "#6F767E",
              }}
            >
              About us
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "18px",
                lineHeight: "190.9%",
                color: "#6F767E",
              }}
            >
              Blog{" "}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box
              bgcolor="#121212"
              sx={{
                height: "150px",
                textAlign: "center",
                paddingTop: "60px",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "17px",
                }}
              >
                © 2021 . All Rights Reserved. With love by Pathfinder Studio
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};
