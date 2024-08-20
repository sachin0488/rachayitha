import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { Tab, tabClasses, Tabs, tabsClasses } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  }
}

const TabBox = ({ TabList }) => {
  const router = useRouter()
  const [value, setValue] = useState(0)
 const {t}=useTranslation();
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleNavigate = useCallback(
    item => () => {
      router.push(
        `${router.pathname}?content_type=${item.contentType}&category=${item.category}${
          router.query.sort_by ? `&sort_by=${router.query.sort_by}` : ''
        }`,
      )
    },
    [router],
  )

  const selectedTab = TabList.find(item => item.contentType === router.query?.content_type)?.id

  useEffect(() => {
    setValue(selectedTab)
  }, [selectedTab, router.query?.content_type])

  return (
    <StyledTabs value={value} onChange={handleChange} aria-label="content type Tab">
      {TabList.map(item => (
        <StyledTab
          onClick={handleNavigate(item)}
          key={item.id}
          label={t(item.name)}
          icon={item.icon}
          {...a11yProps(item.id)}
        />
      ))}
    </StyledTabs>
  )
}

const StyledTab = styled(Tab)`
  display: flex;
  justify-content: start;
  color: ${({ theme }) => theme.palette.text.icon};
  text-transform: capitalize;
  font-weight: 500;

  &.${tabClasses.root} {
    background: ${({ theme }) => theme.palette.primary.main};
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    justify-content: center;
    min-height: var(--main-height);
    white-space: nowrap;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.palette.background.accent}bb;
    font-weight: 500;
    border-radius: 12px;

    @media (max-width: 530px) {
      font-size: 1rem;
      gap: 6px;
    }
    @media (max-width: 465px) {
      font-size: 0.95rem;
      gap: 5px;
      padding: 0px;
      .${tabClasses.iconWrapper} {
        font-size: 1.45rem;
      }
    }
    @media (max-width: 365px) {
      font-size: 0.9rem;
      gap: 5px;
      padding: 0px;
      min-width: 80px;
      .${tabClasses.iconWrapper} {
        font-size: 1.4rem;
      }
    }
    .${tabClasses.iconWrapper} {
      margin-bottom: 0px;
    }
  }

  &.${tabClasses.selected} {
    color: ${({ theme }) => theme.palette.background.accent};
  }

  transition: 0.1s ease-in 150ms;
`

const StyledTabs = styled(Tabs)`
  overflow: visible;
  display: flex;

  @media (max-width: 530px) {
    width: 90%;
  }
  & .${tabsClasses.flexContainer} {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--tab-button-gap);
    @media (max-width: 530px) {
      width: 100%;
      justify-content: space-between;
    }
  }

  & .${tabsClasses.scroller} {
    overflow: visible;
  }

  & .${tabsClasses.indicator} {
    background: ${({ theme }) => theme.palette.primary.main};
    height: 4px;
    border-radius: 2px;
    z-index: 1;
    background: ${({ theme }) => theme.palette.background.paper};
    font-weight: 500;
  }
`

export default TabBox
