import Image from "next/image";
import React from "react";
import HeaderStyle from "./HeaderStyle";
import Logo from "../../../public/logo.svg";
import { AiOutlineSearch } from "react-icons/ai";
import Explore from "../../../public/MenuItem1.svg";
import Ranking from "../../../public/ranking.svg";
import Create from "../../../public/create.svg";
import Library from "../../../public/library1.svg";
import Shorts from "../../../public/shorts.svg";

const Header = () => {
  const {
    HeaderContent,
    LogoContainer,
    LogoTitle,
    NavMenu,
    SearchInput,
    SearchInputDiv,
    MenuItem,
    Button,
  } = HeaderStyle();
  return (
    <>
      <HeaderContent>
        <LogoContainer>
          <Image src={Logo} />
          <LogoTitle>E-Read</LogoTitle>
        </LogoContainer>
        <SearchInputDiv>
          <AiOutlineSearch size={28} color="#969696" fontWeight="600" />
          <SearchInput placeholder="Search novels, poems and many more" />
        </SearchInputDiv>
        <NavMenu>
          <MenuItem>
            <Image src={Explore} />
            <Button>Explore</Button>
          </MenuItem>
          <MenuItem>
            <Image src={Ranking} />
            <Button>Ranking</Button>
          </MenuItem>
          <MenuItem>
            <Image src={Create} />
            <Button>Create</Button>
          </MenuItem>
          <MenuItem>
            <Image src={Library} />
            <Button>Library</Button>
          </MenuItem>
          <MenuItem>
            <Image src={Shorts} />
            <Button>Shorts</Button>
          </MenuItem>
        </NavMenu>
        <Image src={Logo} />
      </HeaderContent>
    </>
  );
};

export default Header;
