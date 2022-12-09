import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { alpha, InputBase, styled, useMediaQuery } from '@mui/material'

const StyledSearchBox = () => {
  const isTabletSM = useMediaQuery('(min-width:1070px)')

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder={isTabletSM ? 'Search novels, poems and many more…' : 'Search here...'}
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
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
  marginLeft: 0,
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

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#000000cb',
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
    color: '#000000cb',
    opacity: 0.9,
  },
}))

// const Root = styled.div`
//   color: #000;
// `

export default StyledSearchBox
