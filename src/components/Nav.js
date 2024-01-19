import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Toolbar, styled, Typography, Button, Box } from "@mui/material";
import Link from "next/link";
const Header = styled(AppBar)`
  background: #6366f1;
`;
const Nav = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        {/* <Container maxWidth="lg"> */}
        <Header position="static">
          <Toolbar>
            {/* <IconButton size="large" edge="start" color="#fff" aria-label="menu" sx={{ mr: 2 }}>
                  <MenuIcon />
                </IconButton> */}
            {/* <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1, color: "#fff" }}>
              STAY's
            </Typography> */}
            <Link href="/auth/login">
              <Button sx={{ color: "#fff" }}>Login</Button>
            </Link>
          </Toolbar>
        </Header>
        {/* </Container> */}
      </Box>
    </>
  );
};

export default Nav;
