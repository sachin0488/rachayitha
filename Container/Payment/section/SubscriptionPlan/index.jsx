import React, { useCallback, useEffect, useMemo, useState } from 'react'
import PlanCard from './components/PlanCard'
import CardMembershipRoundedIcon from '@mui/icons-material/CardMembershipRounded'
import styled from '@emotion/styled'
import useSubscriptionListService from 'Container/Payment/services/SubscriptionList.service'
import { InternalPurchaseOrderType, useInternalPurchaseService } from 'Container/Payment/services/InternalPurchase.service'
import InfoModal from 'Components/StyledModal/InfoModal'

const SubscriptionPlan = () => {
  const { data, isLoading: isFetching } = useSubscriptionListService()
  const { mutate, isLoading, isError, isSuccess } = useInternalPurchaseService()
  const [currentState, setCurrentState] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const handlePayClick = useCallback(
    ({ amount, id }) =>
      () => {
        mutate({
          amount: amount,
          subscriptionId: id,
          orderType: InternalPurchaseOrderType.SUBSCRIPTION,
        })
      },
    [mutate],
  )

  useEffect(() => {
    if (isSuccess || isError) {
      setCurrentState('')
      setIsOpen(false)
    }
  }, [isSuccess, isError])

  const selected = useMemo(() => data?.find(item => `${item?.id}` === currentState), [data, currentState])

  return (
    <Root>
      <InfoModal
        messageNotice={`Do you want to Purchase this plan ${selected?.amount}?`}
        open={isOpen}
        setOpen={setIsOpen}
        isLoading={isLoading}
        buttonText={'Purchase'}
        onClickOk={handlePayClick({ amount: selected?.amount, id: selected?.id })}
      />
      {data?.map(plan => (
        <PlanCard
          key={plan?.id}
          Icon={CardMembershipRoundedIcon}
          name={plan?.name}
          shortDescription={plan?.shortDetails}
          description={plan?.details}
          amount={plan?.amount}
          validity={plan?.validity}
          isLoading={isLoading}
          isSelected={currentState === `${plan?.id}`}
          onPayClick={() => {
            setIsOpen(true)
            setCurrentState(`${plan?.id}`)
          }}
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

export default SubscriptionPlan
