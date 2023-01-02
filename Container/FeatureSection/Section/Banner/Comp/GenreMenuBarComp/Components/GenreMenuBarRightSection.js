import React from 'react'

import MuiSelect from './MuiSelect'
import { ContentType, FilterText, RightSideGenreMenuBar } from 'container/FeatureSection/common/common.styles'

const GenreMenuBarRightSection = () => {
  const menuItems = [
    {
      name: 'novel',
      value: 'NO',
    },
    {
      name: 'poem',
      value: 'PO',
    },
  ]
  const contentStatus = [
    {
      name: 'novel',
      value: 'NO',
    },
    {
      name: 'poem',
      value: 'PO',
    },
  ]
  return (
    <>
      <RightSideGenreMenuBar>
        <FilterText>Filter by</FilterText>
        <ContentType>
          <MuiSelect label="content type" menuItems={menuItems} selectMargin="none" />
        </ContentType>

        <ContentType>
          <MuiSelect label="content Status" menuItems={contentStatus} />
        </ContentType>
      </RightSideGenreMenuBar>
    </>
  )
}

export default GenreMenuBarRightSection
