import React, { useState } from 'react'
import styled from '@emotion/styled'
import SearchIcon from '@mui/icons-material/Search'

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = event => {
    setSearchTerm(event.target.value)
    onSearch(event.target.value)
  }

  return (
    <Root>
      <SearchIcon color="primary" />
      <input type="text" placeholder="Search your rank by writing your name" value={searchTerm} onChange={handleSearch} />
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  max-width: 500px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 10px 14px 10px 14px;

  input {
    border: 0px;
    width: 100%;
    font-size: 1rem;
    margin-left: 10px;
    outline: none;
    background: transparent;
  }

  @media (max-width: 600px) {
    input {
      padding: 10px 30px 10px 30px;
    }
  }
`

const SearchIconWrapper = styled.div``

export default SearchBar
