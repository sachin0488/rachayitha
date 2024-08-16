import React, { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { ArrowDropDownRounded, TranslateRounded } from '@mui/icons-material';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SelectLanguage = () => {
  const { i18n } = useTranslation('common');
  const { locales, locale: currentLocale, pathname, query } = useRouter();

  const [anchorEl, setAnchorEl] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setIsMenuOpen(false);
  };

  return (
    <>
      <IconButton
        color="primary"
        onClick={handleClick}
        sx={{
          transition: '.2s ease-in-out',
          backgroundColor: (theme) => theme.palette.primary.main,
          borderRadius: '8px',
          padding: '0.5rem',
          marginRight: '0.3rem',
          '&:hover': {
            backgroundColor: (theme) => theme.palette.primary.main+'70',
          },
        }}
        variant="contained"
      >
        <TranslateRounded style={{ fontSize: 20, color: 'white' }} />
        {isMenuOpen ? (
          <ArrowDropDownRounded style={{ fontSize: 20, color: 'white' }} />
        ) : (
          <ArrowDropDownRounded style={{ fontSize: 20, color: 'white' }} />
        )}
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
            onClick={handleMenuClose}
            sx={{
              color: (theme) => theme.palette.primary.main,
              padding: '2px 9px',
              paddingRight: '1.7rem',
              fontWeight: '500',
              backgroundColor: locale === currentLocale ? theme => theme.palette.primary.light+'50' : 'inherit',
            }}
          >
            <Link href={{ pathname, query }} locale={locale}>
              <a style={{ textDecoration: 'none', color: 'inherit' }}>
                {locale === 'en-US' ? 'English' : 'हिंदी'}
              </a>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default SelectLanguage;
