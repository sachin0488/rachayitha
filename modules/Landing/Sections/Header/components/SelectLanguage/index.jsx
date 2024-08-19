import React, { useCallback, useState } from 'react'
import { IconButton, Menu, MenuItem } from '@mui/material'
import { ArrowDropDownRounded, TranslateRounded } from '@mui/icons-material'
import { useRouter } from 'next/router'
import { LOCALS } from 'constants/locals.constants'

const SelectLanguage = () => {
  const { locales, locale: currentLocale, push, pathname, query } = useRouter()

  const [anchorEl, setAnchorEl] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
    setIsMenuOpen(prev => !prev)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    setIsMenuOpen(false)
  }

  const handleLanguageChange = useCallback(
    lng => {
      setAnchorEl(null)
      setIsMenuOpen(false)

      const { bookId, poemId, chapterId, slug, chapterSlug, ...otherQuery } = query
      push(
        {
          pathname,

          query: {
            ...query,
          },
        },
        {
          pathname,
          query: {
            ...otherQuery,
          },
        },
        { locale: lng },
      )
    },
    [query, push, pathname],
  )

  return (
    <>
      <IconButton
        color="primary"
        onClick={handleClick}
        sx={{
          transition: '.2s ease-in-out',
          backgroundColor: theme => theme.palette.primary.main,
          borderRadius: '8px',
          padding: '0.5rem',
          marginRight: '0.3rem',
          '&:hover': {
            backgroundColor: theme => theme.palette.primary.main + '70',
          },
        }}
        variant="contained">
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
        }}>
        {LOCALS?.map(item => (
          <MenuItem
            key={item.locale}
            onClick={() => handleLanguageChange(item.locale)}
            sx={{
              color: theme => theme.palette.primary.main,
              padding: '2px 9px',
              paddingRight: '1.7rem',
              fontWeight: '500',
              backgroundColor: item.locale === currentLocale ? theme => theme.palette.primary.light + '50' : 'inherit',
            }}>
            {item.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default SelectLanguage
