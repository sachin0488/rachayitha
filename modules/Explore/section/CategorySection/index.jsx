import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { useMediaQuery } from '@mui/material'
import { useLayoutEffect, useState } from 'react'
import AccordionBox from './components/AccordionBox'
import DrawerBox from './components/DrawerBox'
import useCategoryService from 'modules/Explore/services/category.service'
import { useTranslation } from 'react-i18next'

const getSectionIndexByName = sectionName => {
  switch (sectionName.toLocaleLowerCase()) {
    case 'book':
      return 0
    case 'poem':
      return 1
    case 'short':
      return 2
    default:
      return ''
  }
}

const CategorySection = () => {
  const { t } = useTranslation()
  const is800x = useMediaQuery('(max-width: 800px)')
  const { query } = useRouter()
  const { content_type } = query
  const { CategoryList, isLoading } = useCategoryService()
  const [openedIdx, setOpenedIdx] = useState('')

  useLayoutEffect(() => {
    setOpenedIdx(getSectionIndexByName(String(content_type)))
  }, [content_type])

  const List = [
    {
      name: t('categorySection.novel'),
      contentType: 'book',
      CategoryList,
    },
    {
      name: t('categorySection.poem'),
      contentType: 'poem',
      CategoryList,
    },
    // {
    //   contentType: 'Short',
    //   categoryList: categoryList,
    // },
  ]

  return (
    <Root>
      {is800x ? (
        <DrawerBox List={List} />
      ) : (
        List.map((item, idx) => (
          <AccordionBox
            isLoading={isLoading}
            key={idx}
            idx={idx}
            isOpened={openedIdx === idx}
            setOpenedIdx={setOpenedIdx}
            item={item}
          />
        ))
      )}
    </Root>
  )
}

const categoryList = [
  { id: 1, category_name: 'all' },
  { id: 2, category_name: 'eastern' },
  { id: 3, category_name: 'fantasy' },
  { id: 4, category_name: 'horror' },
  { id: 5, category_name: 'action' },
  { id: 6, category_name: 'agc' },
  { id: 7, category_name: 'urban' },
  { id: 8, category_name: 'games' },
  { id: 9, category_name: 'sciFi' },
  { id: 10, category_name: 'sports' },
  { id: 11, category_name: 'realistic' },
  { id: 12, category_name: 'war' },
  { id: 13, category_name: 'history' },
]

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 800px) {
    margin-bottom: 20px;
  }
`

export default CategorySection
