import { FormControl, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import LogoImage from "../../../public/logo.svg";
import { AiFillCaretDown } from "react-icons/ai";
import HeaderStyle from "./HeaderStyle";
import HeaderMiddleSection from "../HeaderMiddleSection/HeaderMiddleSection";
import Select from "@mui/material";
import MenuItem from "@mui/material";

const Header = () => {
  const {
    Wrapper,
    HeaderContent,
    LogoContainer,
    LogoTitle,
    NavMenu,
    MenuButton1,
    MenuButton2,
  } = HeaderStyle();
  return (
    <>
      <Wrapper>
        <HeaderContent>
          <LogoContainer style={{ width: "50%" }}>
            <Image src={LogoImage} sx={{ width: "55px", height: "55px" }} />
            <LogoTitle>E-Read</LogoTitle>
          </LogoContainer>
          <NavMenu>
            <MenuButton1>
              <Typography>English</Typography>
              <AiFillCaretDown />
            </MenuButton1>
            <MenuButton2>SIGN IN</MenuButton2>
          </NavMenu>
        </HeaderContent>
        <HeaderMiddleSection />
      </Wrapper>
    </>
  );
};

export default Header;
