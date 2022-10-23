import React from "react";
import styled from "@emotion/styled";
import { Box, Typography, Button, TextField } from "@mui/material";

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  height: 80px;
  width: 100%;
`;
const LogoContainer = styled.div`
  display: flex;
  justify-content: start;
  padding: 0 30px;
  align-items: center;
  width: 20%;
  height: 100%;
  font-size: 40px;
  gap: 14px;
`;

const LogoTitle = styled(Typography)`
  font-size: 25px;
  color: ${(props) => props.theme.palette.primary.main};
  font-weight: 600;
  line-height: 29px;
`;
const NavMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  width: 50%;
  font-size: 40px;
  color: ${(props) => props.theme.palette.secondary.main};
`;

const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: center;
`;

const SearchInputDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 23.5px;
  border: 2px solid #5121c0;
  width: 451px;
  height: 47px;
  padding: 0px 8px;
`;
const SearchInput = styled.input`
  width: 295px;
  background-color: white;
  border: none;
  max-height: 35px;
  padding: 0 0px;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
`;

const HeaderStyle = () => {
  return {
    HeaderContent,
    LogoContainer,
    LogoTitle,
    NavMenu,
    SearchInput,
    SearchInputDiv,
    MenuItem,
  };
};

export default HeaderStyle;
