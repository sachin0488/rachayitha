import React, { useState } from 'react'
import styled from '@emotion/styled'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { Select as MUISelect, MenuItem, Typography } from '@mui/material'
import { useContestListService } from '../../../services/ContestList.service'
import { useRouter } from 'next/router'

function SelectCompetition({ setCompetition, setSelectContest }) {
  const router = useRouter()
  const [compVal, setCompVal] = useState(1)
  const { data } = useContestListService()
  setSelectContest(compVal)
  const handleChange = e => {
    console.log(e.target.value)
    setSelectContest(e.target.value)
    setCompVal(e.target.value)
  }
  // console.log(data.data.data);

  const pushToQueryPath = id => {
    router.query.contest_id = id
    router.push(router)
  }

  return (
    <SelectCompetitionWrapper>
      <Container>
        <Typography variant="h4" fontWeight={700} sx={{ color: theme => theme.palette.background.default + 'dd' }} mb={2.5}>
          Select Competition to view Leadership board
        </Typography>
        <SelectWrapper>
          {/* <Select value={compVal} onChange={handleChange} IconComponent={ArrowDropDownIcon}>
            <MenuItem
              value="novel-writing"
              sx={{
                color: `${compVal === 'novel-writing' ? 'rgba(86, 36, 193, 1)' : 'black'}`,
              }}>
              Novel Writing Competition
            </MenuItem>
            <MenuItem
              value="book-writing"
              sx={{
                color: `${compVal === 'book-writing' ? 'rgba(86, 36, 193, 1)' : 'black'}`,
              }}>
              Book Writing Competition
            </MenuItem>
            <MenuItem
              value="poem-writing"
              sx={{
                color: `${compVal === 'poem-writing' ? 'rgba(86, 36, 193, 1)' : 'black'}`,
              }}>
              Poem Writing Competition
            </MenuItem>
          </Select> */}
          <Select value={compVal} onChange={handleChange} IconComponent={ArrowDropDownIcon}>
            {data?.data?.data?.map((item, index) => {
              return (
                <MenuItem
                  key={index}
                  value={item.id}
                  sx={{
                    color: `${compVal === item.contest_name ? 'rgba(86, 36, 193, 1)' : 'black'}`,
                  }}
                  onClick={() => pushToQueryPath(item.id)}>
                  {item.contest_name}
                </MenuItem>
              )
            })}
          </Select>
        </SelectWrapper>
        <Typography variant="body1" sx={{ color: theme => theme.palette.background.default + 'ee', mt: 2.5 }}>
          Read | Write | Participate & Compete
        </Typography>
      </Container>
    </SelectCompetitionWrapper>
  )
}

export default SelectCompetition

const SelectCompetitionWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  position: relative;
  padding: 20px;
  padding-left: 0px;
  padding-right: 0px;
  border-radius: 20px;
  margin-bottom: 20px;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  border-radius: 20px;
  @media (max-width: 1100px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`

const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #0000002b;
  box-shadow: 0px 0px 50px 1px rgba(0, 0, 0, 0.2);
  padding: 14px;
  border-radius: 8px;
  width: 90%;
  @media (max-width: 1100px) {
    width: 100%;
  }
`

const Select = styled(MUISelect)`
  padding: 4px 20px 4px 4px;
  font-size: 1rem;
  height: 3.4rem;
  width: 100%;
  outline: none;
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: bold;
  padding-left: 20px;
  border-radius: 9px;
  background: ${({ theme }) => theme.palette.background.default};
  box-shadow: 0px 0px 50px 1px rgba(0, 0, 0, 0.2);
  .MuiSelect-select {
    padding: 4px 20px 4px 4px;
  }

  .MuiOutlinedInput-notchedOutline {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`

const MenuItems = styled(MenuItem)``

const Heading = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
  color: white;
  width: 41rem;
  font-family: 'Maven Pro';

  @media (max-width: 1100px) {
    width: 100%;
  }
`

const BelowContent = styled.div`
  p {
    font-size: 1.1rem;
    color: #fff;
  }
  width: 41rem;

  @media (max-width: 1100px) {
    width: 100%;
  }
`
