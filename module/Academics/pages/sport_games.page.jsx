import React from 'react'
import { RootContainer } from '../common/styles'
import HeaderSection from '../Sections/HeaderSection'
import data from 'data.config'
import ContentSection from '../Sections/ContentSection'

const SportGamesPage = () => {
  return (
    <RootContainer>
      <HeaderSection text={data.academics.sport_games.title} />
      {data.academics.sport_games.content.map((item, index) => (
        <ContentSection key={item.id} title={item.title} contentList={item.content} />
      ))}
    </RootContainer>
  )
}

export default SportGamesPage
