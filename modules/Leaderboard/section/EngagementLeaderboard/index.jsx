import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import LeadershipBoard from './components/LeadershipBoard';
import SelectCompetition from './components/SelectCompetition';
import styled from '@emotion/styled';
import { Button } from '@mui/material';

function Index() {
  const [competition, setCompetition] = useState('novel-writing'); 

  return (
    <div style={{ padding: '20px' ,
    display:'flex',
    flexDirection:'column',
    alignItems:'start',
    justifyContent:'center'}}>
    <TopMost>
    </TopMost>
      <SelectCompetition setCompetition={setCompetition} />
      <Heading>
        <span>Engagement Leaderboard</span>
        <SearchBar />
      </Heading>
      <LeadershipBoard competition={competition} />
      
     <Button variant="contained" color="primary" sx={{margin: '20px 0',alignSelf:'center'}}>View Full Leadership Board</Button>
    </div>
  );
}

const TopMost = styled.div`
background: radial-gradient(50% 50% at 50% 50%, rgba(173, 137, 250, 0.4) 0%, rgba(173, 137, 250, 0) 100%);
position: absolute;
top: -10%;
left: 0;
width:400px;
height: 400px;
z-index: 1;
`

const Heading = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  font-size: 2em;
  color: #5624C1;
  font-weight: 500;
  font-family: 'Maven Pro';
  color: white;
  span{
    margin-right: 20px;
  }
`;

export default Index;
