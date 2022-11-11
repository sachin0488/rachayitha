import React from "react";
import { MenuItems } from "./HeaderStyle";
import ProfileImg from "../../../public/headerProfileImg.png";
import Image from "next/image";
import { Divider, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import Link from "next/link";
const HeaderMenuMui = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <MenuItems
        id="profile-button"
        onClick={handleClick}
        aria-controls={open ? "profile-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? true : undefined}
      >
        <Image src={ProfileImg} />
      </MenuItems>
      <Menu
        id="Profile-menu"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{ "aria-labelledby": "resources-button" }}
        onClose={handleClose}
      >
        <Link href={`/profile/1`}>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
        </Link>

        <MenuItem onClick={handleClose}>
          <span style={{ color: "red" }}>Signout</span>
        </MenuItem>
      </Menu>
    </>
  );
};

export default HeaderMenuMui;
