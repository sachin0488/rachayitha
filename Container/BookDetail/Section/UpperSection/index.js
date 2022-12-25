import { BookDetailCard } from 'Container/BookDetail/Common/BookDetailStyle'
import React from 'react'
import UpperTopSection from './Components/UpperTopSection'

const UpperSection = ({ item }) => {
  return (
    <>
      <BookDetailCard key={item?.id}>
        <UpperTopSection item={item} />
      </BookDetailCard>
    </>
  )
}

export default UpperSection
