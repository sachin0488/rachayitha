import React, { useState } from 'react';
import styled from '@emotion/styled';
import { AppBar, Button, IconButton, Toolbar, useMediaQuery, Menu, MenuItem } from '@mui/material';
import { NavPageLinks } from '../config.layout';
import { useTranslation } from 'react-i18next';

import LogoBox from './components/LogoBox';
import ProfileButton from './components/ProfileButton';
import StyledNavButton from './components/StyledNavButton';

import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import SearchBoxWithModal from 'modules/Search/components/SearchBoxWithModal';
import { useUserService } from 'modules/Auth/service/User.service';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ArrowDropDownRounded, ArrowDropUpRounded, TranslateRounded } from '@mui/icons-material';

const Header = ({ handleSidebarOpen }) => {
  const isTabletXSM = useMediaQuery('(min-width:900px)');
  const { isLoggedIn } = useUserService();
  const { t } = useTranslation();
  const { locales, locale: currentLocale, push, pathname } = useRouter();

  const [anchorEl, setAnchorEl] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsMenuOpen((prev) => !prev);
  };

  const handleLanguageChange = (lng) => {
    setAnchorEl(null);
    setIsMenuOpen(false);
    push(pathname, pathname, { locale: lng });
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setIsMenuOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 'none',
          backdropFilter: 'blur(18px)',
          borderBottom: theme => '1px solid' + theme.palette.primary.main + '50',
          background: ({ palette }) => palette.background.paper + 'e9',
        }}
      >
        <Toolbar>
          <LogoBox />
          <Toolbar style={{ marginLeft: 'auto', paddingInline: '0px' }}>
            <SearchBoxWithModal />
            {isTabletXSM && (
              <NavButtonWarper>
                {NavPageLinks.map((Item, index) => {
                  if (isLoggedIn) {
                    return <StyledNavButton key={index} {...Item} Icon={Item.Icon} />;
                  }

                  if (Item?.forLoggedInOnly) return null;

                  return <StyledNavButton key={index} {...Item} Icon={Item.Icon} />;
                })}
              </NavButtonWarper>
            )}
          </Toolbar>
          <IconButton
            color="primary"
            onClick={handleClick}
            sx={{
              transition: '.2s ease-in-out',
              border: '2px solid',
              borderColor: theme => theme.palette.primary.main,
              borderRadius: '0',
              padding: '4px',
              marginRight: '1.3rem',
            }}
            variant="outlined"
          >
            <TranslateRounded style={{ fontSize: 20 }} />
            {isMenuOpen ? <ArrowDropUpRounded style={{ fontSize: 20 }} /> : <ArrowDropDownRounded style={{ fontSize: 20 }} />}
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{
              '& .MuiMenu-paper': {
                borderRadius: '8px',
              },
            }}
          >
            {locales?.map((locale) => (
              <MenuItem
                key={locale}
                onClick={() => handleLanguageChange(locale)}
                sx={{
                  color: theme => theme.palette.primary.main,
                  padding: '2px 9px',
                  paddingRight: '1.7rem',
                  fontWeight: '500',
                }}
              >
                {locale === 'en-US' ? 'English' : 'हिंदी'}
              </MenuItem>
            ))}
          </Menu>
          {isLoggedIn ? (
            <>
              {isTabletXSM ? (
                <ProfileButton />
              ) : (
                <StyledSidebarButton
                  color="primary"
                  onClick={handleSidebarOpen}
                  edge="start"
                  sx={{
                    transition: '.2s ease-in-out',
                  }}
                >
                  <MenuOpenIcon style={{ fontSize: 25 }} />
                </StyledSidebarButton>
              )}
            </>
          ) : (
            <Link href="/login">
              <Button variant="contained" disableElevation>
                {t('signIn')}
              </Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

const NavButtonWarper = styled.div`
  display: flex;
  gap: 1px;
  margin-right: 10px;
  margin-left: 15px;
`;

const StyledSidebarButton = styled(IconButton)``;

export default Header;
