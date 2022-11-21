import Link from 'next/link'
import React from 'react'
import {
  FIrstFictionWrapper,
  FirstFictionSubWrapper,
  CreateNewFictionWrapper,
  NoWorkTextWrapper,
  CreateNewButton,
  NoWorkText,
  CreateFirstFictionText,
} from '../CreateStyle'

const FirstFiction = ({ link }) => {
  const noWorkIcon = 'https://res.cloudinary.com/dk6twrko6/image/upload/v1668259789/Vector_1_u6n1ci.png'
  return (
    <>
      <FIrstFictionWrapper>
        <FirstFictionSubWrapper>
          <CreateNewFictionWrapper>
            <img src={noWorkIcon} />
            <NoWorkTextWrapper>
              <NoWorkText>No Works!</NoWorkText>
              <CreateFirstFictionText>Click the button below to create your first fiction now.</CreateFirstFictionText>
            </NoWorkTextWrapper>
            <Link href={link}>
              <CreateNewButton>Create New</CreateNewButton>
            </Link>
          </CreateNewFictionWrapper>
        </FirstFictionSubWrapper>
      </FIrstFictionWrapper>
    </>
  )
}

export default FirstFiction
