import Image from 'next/image'
import React from 'react'
import {
  HeaderContent,
  LogoContainer,
  LogoTitle,
  NavMenu,
  SearchInput,
  SearchInputDiv,
  MenuItems,
  Button,
  ImgCont,
} from './HeaderStyle'
import Logo from '../../../public/logo.svg'
import { AiOutlineSearch } from 'react-icons/ai'
import Explore from '../../../public/MenuItem1.svg'
import Ranking from '../../../public/ranking.svg'
import Create from '../../../public/create.svg'
import Library from '../../../public/library1.svg'
import Shorts from '../../../public/shorts.svg'
import Link from 'next/link'
import HeaderDrawer from './HeaderDrawer'
import HeaderMenuMui from './HeaderMenuMui'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  const section1 = router.pathname.split('/')[1]
  const section2 = router.pathname.split('/')[2]
  const link = `/${section1}/${section2}?lead=female&genre=all&sub_genre=power`
  return (
    <>
      <HeaderContent>
        <Link href={`/`}>
          <LogoContainer>
            <Image src={Logo} />
            <LogoTitle>E-Read</LogoTitle>
          </LogoContainer>
        </Link>
        <SearchInputDiv>
          <AiOutlineSearch size={28} color="#969696" fontWeight="600" />
          <SearchInput placeholder="Search novels, poems and many more" />
        </SearchInputDiv>
        <NavMenu>
          <ImgCont>
            <HeaderDrawer />
          </ImgCont>
          <Link href="/explore/novel?lead=male&genre=all&sub_genre=power">
            <MenuItems>
              <Image src={Explore} />
              <Button>Explore</Button>
            </MenuItems>
          </Link>
          <Link href="/ranking/novel?lead=male&genre=all">
            <MenuItems>
              <Image src={Ranking} />
              <Button>Ranking</Button>
            </MenuItems>
          </Link>
          <Link href="/create/dashboard/stories">
            <MenuItems>
              <Image src={Create} />
              <Button>Create</Button>
            </MenuItems>
          </Link>
          <Link href={link}>
            <MenuItems>
              <Image src={Library} />
              <Button>Library</Button>
            </MenuItems>
          </Link>
          <Link href="/short">
            <MenuItems>
              <Image src={Shorts} />
              <Button>Shorts</Button>
            </MenuItems>
          </Link>
          <HeaderMenuMui />
        </NavMenu>
      </HeaderContent>
    </>
  )
}

export default Header
