import styled from '@emotion/styled'
import PlanCard from './components/PlanCard'
import TollRoundedIcon from '@mui/icons-material/TollRounded'
import { useCallback, useEffect, useState } from 'react'
import { useCreateCoinPurchaseService } from 'modules/Payment/services/CreateCoinPurchase.service'
import useCoinPlanListService from 'modules/Payment/services/CoinPlanList.service'

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

// isLoading, isError,

const CoinPlan = () => {
  const { isLoading, mutate, isSuccess, isError } = useCreateCoinPurchaseService()
  const [currentState, setCurrentState] = useState('')
  const { data } = useCoinPlanListService()
  const handlePayClick = useCallback(
    ({ amount, qty, id }) =>
      () => {
        setCurrentState(`${qty}`)
        mutate({
          amount: amount,
          qty: qty,
          coinPlanId: id,
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
      {data.map(plan => (
        <PlanCard
          key={plan.id}
          Icon={TollRoundedIcon}
          name={`${plan.name}`}
          shortDescription={`${plan.shortDetails}`}
          description={`${plan.details}`}
          amount={`₹ ${plan.amount}`}
          coinQuantity={plan.coinQuantity}
          isSelected={currentState === `${plan.coinQuantity}`}
          isLoading={isLoading}
          onPayClick={handlePayClick({ amount: plan.amount, qty: plan.coinQuantity, id: plan.id })}
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
