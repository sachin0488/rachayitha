import styled from '@emotion/styled'
import PlanCard from './components/PlanCard'
import TollRoundedIcon from '@mui/icons-material/TollRounded'
import { useCallback, useEffect, useState } from 'react'
import { useCreateCoinPurchaseService } from 'Container/Payment/services/CreateCoinPurchase.service'

const plans = [
  {
    coins: 1,
    price: 10,
  },
  {
    coins: 5,
    price: 50,
  },
  {
    coins: 10,
    price: 100,
  },
  {
    coins: 50,
    price: 500,
  },
]

const CoinPlan = () => {
  const { isLoading, mutate, isSuccess, isError } = useCreateCoinPurchaseService()
  const [currentState, setCurrentState] = useState('')

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
      {plans.map(plan => (
        <PlanCard
          key={plan.coins}
          Icon={TollRoundedIcon}
          name={`${plan.coins} Coins`}
          highLight={`₹ ${plan.price}`}
          isSelected={currentState === `${plan.coins}`}
          isLoading={isLoading}
          onPayClick={handlePayClick({ amount: plan.price, qty: plan.coins })}
        />
      ))}
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
