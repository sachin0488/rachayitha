import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import LeadershipBoard from './components/LeadershipBoard';
import SelectCompetition from './components/SelectCompetition';
import styled from '@emotion/styled';
import { Button } from '@mui/material';

function Index() {
  const [competition, setCompetition] = useState('novel-writing'); 
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div style={{ padding: '20px', display:'flex', flexDirection:'column', alignItems:'start', justifyContent:'center'}}>
      <TopMost />
      <SelectCompetition setCompetition={setCompetition} />
      <Heading>
        <h2>Engagement Leaderboard</h2>
        <SearchBarWrapper>
          <SearchBar onSearch={setSearchTerm}  />
        </SearchBarWrapper>
      </Heading>
      <LeadershipBoard competition={competition} searchTerm={searchTerm} />
      <Button variant="contained" color="primary" sx={{ margin: '20px 0', marginBottom: '40px', alignSelf: 'center' }}>
        View Full Leadership Board
      </Button>
    </div>
  );
}

const TopMost = styled.div`
  background: radial-gradient(50% 50% at 50% 50%, rgba(173, 137, 250, 0.4) 0%, rgba(173, 137, 250, 0) 100%);
  position: absolute;
  top: -10%;
  left: 0;
  width: 400px;
  height: 400px;
  z-index: 1;
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  color: #5624C1;
  font-weight: 500;
  font-family: 'Maven Pro';
  color: white;
 
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    h2{
  margin-bottom: 0;
  margin:0;
 }
 padding: 0 1rem;
  }
`;

const SearchBarWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

export default Index;
