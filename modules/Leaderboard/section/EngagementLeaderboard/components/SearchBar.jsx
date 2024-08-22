import React, { useState } from 'react';
import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <SearchContainer>
      <SearchBox>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <input 
          type="text" 
          placeholder="Search your rank by writing your name" 
          value={searchTerm} 
          onChange={handleSearch}
        />
      </SearchBox>
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SearchBox = styled.div`
  width: 100%;
  max-width: 500px; /* Adjust as needed */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  input {
    width: 100%;
    padding: 10px 40px 10px 40px; 
    font-size: 16px;
    border-radius: 5px;
    border: 2px solid #5624C1;
    outline: none;
  }

  @media (max-width: 600px) {
    input {
      padding: 10px 30px 10px 30px; 
    }
  }
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  left: 10px;
  color: #5624C1;
`;

export default SearchBar;
