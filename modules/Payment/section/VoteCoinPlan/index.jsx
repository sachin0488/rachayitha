import React, { useCallback, useEffect, useMemo, useState } from 'react'
import PlanCard from './components/PlanCard'
import CardMembershipRoundedIcon from '@mui/icons-material/CardMembershipRounded'
import styled from '@emotion/styled'
import useSubscriptionListService from 'modules/Payment/services/SubscriptionList.service'
import { InternalPurchaseOrderType, useInternalPurchaseService } from 'modules/Payment/services/InternalPurchase.service'
import InfoModal from 'components/StyledModal/InfoModal'
import useVotePlanListService from 'modules/Payment/services/VotePlanList.service'
import TollRoundedIcon from '@mui/icons-material/TollRounded'

const SubscriptionPlan = () => {
  const { data, isLoading: isFetching } = useVotePlanListService()
  const [currentState, setCurrentState] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const { mutate, isLoading, isError, isSuccess } = useInternalPurchaseService()

  const handlePayClick = useCallback(
    ({ amount, id }) =>
      () => {
        mutate({
          amount: amount,
          votePlanId: id,
          orderType: InternalPurchaseOrderType.VOTETOKEN,
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
          Icon={TollRoundedIcon}
          name={plan?.name}
          shortDescription={plan?.shortDetails}
          description={plan?.details}
          amount={plan?.amount}
          voteToken={plan?.voteToken}
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
