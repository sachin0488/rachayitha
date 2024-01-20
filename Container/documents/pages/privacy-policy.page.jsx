import React from 'react'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import Root, { Main } from '../components/Root'

const PrivacyPolicyPage = () => {
  return (
    <Root>
      <Main>
        <Heading>Privacy Policy</Heading>
        <Paragraph>{txt}</Paragraph>
      </Main>
    </Root>
  )
}

const txt = `
 We are preparing the privacy policy for you!
 `

export default PrivacyPolicyPage
