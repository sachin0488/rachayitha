import Image from "next/image";
import React from "react";
import HeaderStyle from "./HeaderStyle";
import Logo from "../../../public/logo.svg";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  const {
    HeaderContent,
    LogoContainer,
    LogoTitle,
    NavMenu,
    SearchInput,
    SearchInputDiv,
  } = HeaderStyle();
  return (
    <>
      <HeaderContent>
        <LogoContainer>
          <Image src={Logo} />
          <LogoTitle>E-Read</LogoTitle>
        </LogoContainer>
        <SearchInputDiv>
          <AiOutlineSearch size={24} color="#969696" fontWeight={600} />
          <SearchInput placeholder="Search novels, poems and many more" />
        </SearchInputDiv>
      </HeaderContent>
    </>
  );
};

export default Header;
