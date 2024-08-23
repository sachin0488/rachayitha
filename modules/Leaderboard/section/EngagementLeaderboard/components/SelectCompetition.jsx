import React from 'react';
import styled from '@emotion/styled';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Select as MUISelect, MenuItem } from '@mui/material';

function SelectCompetition({ setCompetition }) {
  const [compVal, setCompVal] = React.useState('novel-writing');
  const handleChange = (event) => {
    setCompetition(event.target.value);
    setCompVal(event.target.value);
  };

  return (
    <SelectCompetitionWrapper>
      <Container>
        <Heading>Select Competition to view Leadership board</Heading>
        <SelectWrapper>
          <Select
            value={compVal}
            onChange={handleChange}
            IconComponent={ArrowDropDownIcon}
          >
            <MenuItem value="novel-writing" 
            sx={{
             color: `${compVal === 'novel-writing' ? 'rgba(86, 36, 193, 1)': 'black'}`,
            }}>Novel Writing Competition</MenuItem>
            <MenuItem value="book-writing" 
             sx={{
             color: `${compVal === 'book-writing' ? 'rgba(86, 36, 193, 1)': 'black'}`,
            }}>Book Writing Competition</MenuItem>
            <MenuItem value="poem-writing" 
             sx={{
             color: `${compVal === 'poem-writing' ? 'rgba(86, 36, 193, 1)': 'black'}`,
            }}>Poem Writing Competition</MenuItem>
          </Select>
        </SelectWrapper>
        <BelowContent>
          <p>Read | Write | Participate & Compete</p>
        </BelowContent>
      </Container>
      <RightTop>
        <img src='./Illustrations.png' alt='Illustration' />
      </RightTop>
    </SelectCompetitionWrapper>
  );
}

export default SelectCompetition;

const SelectCompetitionWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  position: relative;
  padding: 20px;
 border-radius: 20px;
  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 41rem;
  border-radius: 20px;
  @media (max-width: 1100px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;

const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 41rem;
  background: rgba(255, 255, 255, 1);
  border-radius: 8px;
  @media (max-width: 1100px) {
    width: 100%;
  }
`;

const Select = styled(MUISelect)`
  padding: 8px 40px 8px 8px;
  font-size: 1rem;
  height: 5rem;
  width: 100%;
  outline: none;
  color: rgba(86, 36, 193, 1);
  font-weight: bold;
  border: 12px solid rgba(86, 36, 193, 1);
  padding-left: 20px;
  border-radius: 8px;
  font-family: 'Maven Pro';

  .MuiSelect-select {
    padding: 8px 40px 8px 8px;
  }

  .MuiOutlinedInput-notchedOutline {
    ${'' /* border-color: rgba(86, 36, 193, 1); */}
  }
`;

const MenuItems = styled(MenuItem)`
  
`;

const Heading = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
  color: white;
  width: 41rem;
  font-family: 'Maven Pro';

  @media (max-width: 1100px) {
    width: 100%;
  }
`;

const BelowContent = styled.div`
  p {
    font-size: 1.1rem;
    color:#fff;
  }
  width: 41rem;

  @media (max-width: 1100px) {
    width: 100%;
  }
`;

const RightTop = styled.div`
  position: absolute;
  top: -12%;
  right: -12%;

  img {
    width: 400px;
  }

  @media (max-width: 1100px) {
    position: static;
    margin-top: 20px;

    img {
      width: 100%;
      max-width: 300px;
    }
  }
`;
