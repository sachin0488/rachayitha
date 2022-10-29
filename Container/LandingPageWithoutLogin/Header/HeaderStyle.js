import styled from "@emotion/styled";
import { Typography, Button, Box } from "@mui/material";
import {
  laptop,
  mobileL,
  mobileM,
  tablet,
} from "../../../styles/mediaQuery/breakPoints";
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
  padding: 16px 10px;
  @media ${mobileM} {
    padding: 18px 30px;
  }
  @media ${mobileL} {
    padding: 22px 40px;
  }

  @media ${tablet} {
    padding: 22px 70px;
  }
  @media ${laptop} {
    padding: 22px 107px;
  }
`;
const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  height: 80px;
  width: 96%;
  @media ${mobileL} {
    width: 85%;
  }
`;
const LogoContainer = styled.div`
  display: flex;
  justify-content: start;
  padding: 0px 0px;
  align-items: center;
  width: 30%;
  height: 100%;
  font-size: 40px;
  gap: 5px;
  @media ${mobileL} {
    padding: 0 30px;
    gap: 14px;
  }
`;
const LogoTitle = styled(Typography)`
  color: ${(props) => props.theme.palette.primary.main};
  font-weight: 600;
  line-height: 21px;
  font-size: 20px;
  @media ${mobileL} {
    font-weight: 600;
    line-height: 29px;
    font-size: 25px;
  }
`;
const NavMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  width: 50%;
  font-size: 40px;
  @media ${mobileL} {
    gap: 20px;
    width: 50%;
    font-size: 40px;
  }
  color: ${(props) => props.theme.palette.secondary.main};
`;

const MenuButton1 = styled(Box)`
  border-color: ${(props) => props.theme.palette.primary.main};

  width: 80.98px;
  height: 30px;
  padding: 5px;
  border: 2px solid #5525c2;
  border-radius: 2.8341px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  @media ${mobileM} {
    width: 97px;
    height: 38px;
    border-radius: 5px;
    border: 2px solid;
    padding: 11px;
  }
`;

const MenuButton2 = styled(Button)`
  width: 74.98px;
  height: 30px;
  padding: 5px;
  border: 2px solid #5525c2;
  border-radius: 2.8341px;
  border-color: ${(props) => props.theme.palette.secondary.main};

  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  gap: 4px;
  @media ${mobileM} {
    width: 97px;
    height: 38px;
    border-radius: 5px;
    border: 2px solid;
    padding: 11px;
    font-size: 16px;
    line-height: 19px;
  }
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
