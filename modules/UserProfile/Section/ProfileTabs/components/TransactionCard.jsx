import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { StatusTypes, TransactionTypes } from 'modules/UserProfile/services/TransactionHistory.service'
import moment from 'moment'
import React from 'react'

const TransactionCard = ({ item }) => {
  return (
    <Root>
      <Top>
        <Typography variant="body1" fontWeight={500} color="secondary">
          {item?.purpose}
        </Typography>

        <StatusField
          marginLeft="auto"
          variant="subtitle2"
          className={item?.status === StatusTypes.SUCCESS ? 'success' : item?.status === StatusTypes.FAILED ? 'failed' : 'pending'}>
          {item?.status}
        </StatusField>
        <Field className={item?.transactionType === TransactionTypes.CREDIT ? 'created' : 'debited'}>
          <Typography variant="subtitle2">{item?.transactionType === TransactionTypes.CREDIT ? 'Created' : 'Debited'}</Typography>
          <Typography fontWeight={500} variant="subtitle2">
            {item?.transactionType === TransactionTypes.CREDIT ? '+' : '-'}
            {item?.amount} coins
          </Typography>
        </Field>
      </Top>
      <Bottom>
        <Typography variant="subtitle2" color="GrayText" marginLeft="auto">
          Created At {moment(item?.createdAt, 'YYYY-MM-DD').format('YYYY/MM/DD')}
        </Typography>
      </Bottom>
    </Root>
  )
}

const Root = styled.div`
  position: relative;
  padding: 8px 10px 8px 15px;
  /* box-shadow: none; */
  border-radius: 16px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.palette.primary.main}18;
  /* :hover {
    border: 1px solid ${({ theme }) => theme.palette.primary.main};
    box-shadow: 0px 7px 10px 1px rgba(0, 0, 0, 0.05);
    transform: scale(1.02);
  } */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 10px;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Bottom = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const StatusField = styled(Typography)`
  display: flex;
  gap: 5px;
  /* margin-left: auto; */
  border-radius: ${({ theme }) => theme.shape.borderRadius - 2}px;
  padding: 5px 10px;
  &.success {
    background-color: ${({ theme }) => theme.palette.success.main}05;
    color: ${({ theme }) => theme.palette.success.main}8f;
  }
  &.failed {
    background-color: ${({ theme }) => theme.palette.warning.main}15;
    color: ${({ theme }) => theme.palette.warning.main};
  }
`

const Field = styled.div`
  display: flex;
  gap: 5px;
  /* margin-left: auto; */
  border-radius: ${({ theme }) => theme.shape.borderRadius - 2}px;
  padding: 5px 10px;
  &.created {
    background-color: ${({ theme }) => theme.palette.success.main}15;
    color: ${({ theme }) => theme.palette.success.main};
  }
  &.debited {
    background-color: ${({ theme }) => theme.palette.error.main}09;
    color: ${({ theme }) => theme.palette.error.main};
  }
`

export default TransactionCard
