import { Menu as MenuIcon } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

interface HamburgerMenuProps {
  isLoggedIn: boolean;
  handleLogout: () => void;
}

function HamburgerMenu({ isLoggedIn, handleLogout }: HamburgerMenuProps) {
  const [hamburgerMenu, setHamburgerMenu] = React.useState<null | HTMLElement>(
    null
  );

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setHamburgerMenu(event.currentTarget);
  };

  const handleMenuClose = () => {
    setHamburgerMenu(null);
  };

  const menuItems = {
    fontFamily: "Lexend Giga",
  };

  const menuIcon = {
    fontSize: "2.5rem",
    color: "black",
  };

  return (
    <>
      <IconButton
        size="large"
        aria-label="menu"
        onClick={handleMenuOpen}
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        <MenuIcon sx={menuIcon} />
      </IconButton>

      <Menu
        anchorEl={hamburgerMenu}
        open={Boolean(hamburgerMenu)}
        onClose={handleMenuClose}
      >
        <MenuItem sx={menuItems}>Our Team</MenuItem>
        <MenuItem sx={menuItems}>Find Us</MenuItem>
        {isLoggedIn ? (
          <MenuItem sx={menuItems} onClick={handleLogout}>
            Logout
          </MenuItem>
        ) : (
          <NavLink
            style={{ textDecoration: "none", color: "inherit" }}
            to="/login"
          >
            <MenuItem sx={menuItems}>Login</MenuItem>
          </NavLink>
        )}
      </Menu>
    </>
  );
}

export default HamburgerMenu;
