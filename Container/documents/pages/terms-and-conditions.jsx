import React from 'react'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import Root, { Main } from '../components/Root'

const TermsAndConditionsPage = () => {
  return (
    <Root>
      <Main>
        <Heading>Terms And Conditions</Heading>
        <Paragraph>{txt}</Paragraph>
      </Main>
    </Root>
  )
}

const txt = `
We are preparing the terms and conditions for you!
`

export default TermsAndConditionsPage
