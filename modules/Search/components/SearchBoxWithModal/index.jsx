import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { alpha, InputBase, styled, useMediaQuery } from '@mui/material'
import SearchModal from './Modal'
import { useTranslation } from 'react-i18next'

const SearchBoxWithModal = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const isTabletSM = useMediaQuery('(min-width:1070px)')
  const isMobileXS = useMediaQuery('(max-width:590px)')
  const { t } = useTranslation()

  return (
    <>
      <SearchModal open={isModalOpen} setOpen={setModalOpen} />
      {isMobileXS ? (
        <Search onClick={() => setModalOpen(true)}>
          <SearchIconWrapperForMobile>
            <SearchIcon />
          </SearchIconWrapperForMobile>
        </Search>
      ) : (
        <Search onClick={() => setModalOpen(true)}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder={isTabletSM ? t('searchBox.placeholder.desktop') : t('searchBox.placeholder.mobile')}
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      )}
    </>
  )
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.primary.main, 0.1),
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.15),
  },
  transition: 'background-color .2s ease-in-out',

  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(2),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.primary.main,
}))

const SearchIconWrapperForMobile = styled('div')(({ theme }) => ({
  padding: theme.spacing(0.8, 1.3, 0.8, 1.3),
  height: '100%',
  pointerEvents: 'visible',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.primary.main,
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.secondary.main,
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    maxWidth: '30ch',
    '@media (min-width:1070px)': {
      width: '30ch',
    },
  },
  '& .MuiInputBase-input::placeholder': {
    color: theme.palette.secondary.main,
    opacity: 0.9,
  },
}))

export default SearchBoxWithModal
