import styled from "@emotion/styled";
import { Typography, Button, Box } from "@mui/material";
const Wrapper = styled.div`
  width: 100%;
  min-height: 642px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 80px;
  background-image: linear-gradient(
    180deg,
    rgba(102, 59, 203, 0.2) 0%,
    rgba(102, 59, 203, 0) 100%
  );
  padding: 22px 107px;
`;
const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  height: 80px;
  width: 85%;
`;
const LogoContainer = styled.div`
  display: flex;
  justify-content: start;
  padding: 0 30px;
  align-items: center;
  width: 50%;
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

const MenuButton1 = styled(Box)`
  width: 97px;
  height: 38px;
  border-radius: 5px;
  border-color: ${(props) => props.theme.palette.primary.main};
  border-width: 2px;
  border-style: solid;
  padding: 11px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
`;

const MenuButton2 = styled(Button)`
  width: 97px;
  height: 38px;
  border-radius: 5px;
  border-color: ${(props) => props.theme.palette.secondary.main};
  border-width: 2px;
  border-style: solid;
  padding: 11px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  gap: 4px;
  background-color: ${(props) => props.theme.palette.secondary.main};
  color: white;
  &:hover {
    color: ${(props) => props.theme.palette.secondary.main};
  }
`;

const HeaderStyle = () => {
  return {
    Wrapper,
    HeaderContent,
    MenuButton1,
    MenuButton2,
    NavMenu,
    LogoContainer,
    LogoTitle,
  };
};

export default HeaderStyle;
