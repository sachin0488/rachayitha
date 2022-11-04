import Image from "next/image";
import React from "react";
import HeaderStyle from "./HeaderStyle";
import Logo from "../../../public/logo.svg";
import ProfileImg from "../../../public/headerProfileImg.png";
import { AiOutlineSearch } from "react-icons/ai";
import Explore from "../../../public/MenuItem1.svg";
import Ranking from "../../../public/ranking.svg";
import Create from "../../../public/create.svg";
import Library from "../../../public/library1.svg";
import Shorts from "../../../public/shorts.svg";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

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
    Img,
    ImgCont,
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
          <ImgCont>
            <FiMenu />
          </ImgCont>
          <Link href="/explore">
            <MenuItem>
              <Image src={Explore} />
              <Button>Explore</Button>
            </MenuItem>
          </Link>
          <Link href="/ranking">
            <MenuItem>
              <Image src={Ranking} />
              <Button>Ranking</Button>
            </MenuItem>
          </Link>
          <Link href="/">
            <MenuItem>
              <Image src={Create} />
              <Button>Create</Button>
            </MenuItem>
          </Link>
          <Link href="/">
            <MenuItem>
              <Image src={Library} />
              <Button>Library</Button>
            </MenuItem>
          </Link>
          <Link href="/">
            <MenuItem>
              <Image src={Shorts} />
              <Button>Shorts</Button>
            </MenuItem>
          </Link>
        </NavMenu>
        <Link href={`/profile/1`}>
          <Image src={ProfileImg} />
        </Link>
      </HeaderContent>
    </>
  );
};

export default Header;
