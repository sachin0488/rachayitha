import React from 'react';
import styled from '@emotion/styled';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function SelectCompetition({ setCompetition }) {
  const handleChange = (event) => {
    setCompetition(event.target.value);
  };

  return (
    <SelectCompetitionWrapper>
      <Container>
        <Heading>Select Competition to view Leadership board</Heading>
        <SelectWrapper>
          <Select onChange={handleChange}>
            <option value="novel-writing">Novel Writing Competition</option>
            <option value="book-writing">Book Writing Competition</option>
            <option value="poem-writing">Poem Writing Competition</option>
          </Select>
          <ArrowIcon />
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

  @media (max-width: 1100px) {
    width: 100%;
  }
`;

const Select = styled.select`
  padding: 8px 40px 8px 8px;
  font-size: 16px;
  border-radius: 4px;
  height: 5rem;
  appearance: none;
  width: 100%;
  outline: none;
  color: rgba(86, 36, 193, 1);
  font-weight: bold;
  border: 12px solid rgba(86, 36, 193, 1);
  padding-left: 20px;
`;

const ArrowIcon = styled(ArrowDropDownIcon)`
  position: absolute;
  right: 10px;
  pointer-events: none;
  color: rgba(86, 36, 193, 1);
  margin-right: 10px;
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
    color: #FFFFFF;
  }
  width: 41rem;

  @media (max-width: 1100px) {
    width: 100%;
  }
`;

const RightTop = styled.div`
  position: absolute;
  top: 0;
  right: 0;

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
