import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import LeadershipBoard from './components/LeadershipBoard'
import SelectCompetition from './components/SelectCompetition'
import styled from '@emotion/styled'
import { Button, Typography } from '@mui/material'

function Index() {
  const [competition, setCompetition] = useState('novel-writing')
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <Root>
      <TopMost />
      <SelectCompetition setCompetition={setCompetition} />
      <Heading>
        <Typography variant="h4" fontWeight="600" lineHeight={1} mr={4}>
          Engagement Leaderboard
        </Typography>

        <SearchBar onSearch={setSearchTerm} />
      </Heading>

      <LeadershipBoard competition={competition} searchTerm={searchTerm} />

      <Button variant="contained" color="primary" sx={{ margin: '20px 0', marginBottom: '40px', alignSelf: 'center' }}>
        View Full Leadership Board
      </Button>
    </Root>
  )
}

const Root = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`

const TopMost = styled.div`
  background: radial-gradient(50% 50% at 50% 50%, rgba(173, 137, 250, 0.2) 0%, rgba(173, 137, 250, 0) 100%);
  position: absolute;
  top: -10%;
  left: 0;
  width: 400px;
  height: 400px;
  z-index: 1;
`

const Heading = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: 500;
  color: ${({ theme }) => theme.palette.background.default};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    h2 {
      margin-bottom: 0;
      margin: 0;
    }
    padding: 0 1rem;
  }
`

export default Index
