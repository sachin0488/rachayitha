import Link from 'next/link'
import React from 'react'
import { Section, Container, Heading, ParagraphText, ReturnHomeButton } from './404PageStyles'

const ErrorPageComp = () => {
  return (
    <Section>
      <Container>
        <Heading>404</Heading>
        <ParagraphText>OOPS, THE PAGE YOU ARE LOOKING FOR CAN'T BE FOUND!</ParagraphText>

        <Link href={`/`}>
          <ReturnHomeButton>BACK TO HONEPAGE</ReturnHomeButton>
        </Link>
      </Container>
    </Section>
  )
}

export default ErrorPageComp
