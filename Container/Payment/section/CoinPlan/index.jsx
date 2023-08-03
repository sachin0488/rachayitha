import React, { useCallback, useEffect, useState } from 'react'
import PlanCard from './components/PlanCard'
import CardMembershipRoundedIcon from '@mui/icons-material/CardMembershipRounded'
import TollRoundedIcon from '@mui/icons-material/TollRounded'
import styled from '@emotion/styled'
import { useCreateCoinPurchaseService } from 'Container/Payment/services/CreateCoinPurchase.service'

const CoinPlan = () => {
  const [currentState, setCurrentState] = useState("")
  const { isLoading, mutate, isSuccess, isError } = useCreateCoinPurchaseService()

  const handlePayClick = useCallback(
    ({ amount, qty }) =>
      () => {
        setCurrentState(`${qty}`)
        mutate({
          amount: amount,
          qty: qty,
        })
      },
    [mutate],
  )

  useEffect(() => {
    if (isSuccess || isError) {
      setCurrentState('')
    }
  }, [isSuccess, isError])

  return (
    <Root>
      <PlanCard
        Icon={TollRoundedIcon}
        name="10 Coins"
        description="Did you receive an email or text (SMS) requesting your Netflix account email, phone number, password, or Coin method? If so, it probably did not come from us. Here are some tips to identify and handle a suspicious email or text and keep your account safe."
        highLight="₹90"
        isSelected={currentState === '10'}
        isLoading={isLoading}
        onPayClick={handlePayClick({ amount: 90, qty: 10 })}
      />
      <PlanCard
        Icon={TollRoundedIcon}
        name="50 Coins"
        description="Did you receive an email or text (SMS) requesting your Netflix account email, phone number, password, or Coin method? If so, it probably did not come from us. Here are some tips to identify and handle a suspicious email or text and keep your account safe."
        highLight="₹400"
        isSelected={currentState === '50'}
        isLoading={isLoading}
        onPayClick={handlePayClick({ amount: 400, qty: 50 })}
      />
      <PlanCard
        Icon={TollRoundedIcon}
        name="100 Coins"
        description="Did you receive an email or text (SMS) requesting your Netflix account email, phone number, password, or Coin method? If so, it probably did not come from us. Here are some tips to identify and handle a suspicious email or text and keep your account safe."
        highLight="₹750"
        isSelected={currentState === '100'}
        isLoading={isLoading}
        onPayClick={handlePayClick({ amount: 750, qty: 100 })}
      />
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 30px;
  max-width: var(--main-max-width);
  height: 100%;
  overflow-x: scroll;
  padding: 30px;
  padding-left: 23px;
  padding-bottom: 40px;
`

export default CoinPlan