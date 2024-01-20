import styled from '@emotion/styled'

import { motion } from 'framer-motion'
import { useCallback, useId } from 'react'

const TabSection = ({ currentTabId, onTabChange, tabs }) => {
  const layoutId = useId()

  const handleChange = useCallback(
    item => () => {
      onTabChange(item.id)
    },
    [onTabChange],
  )

  return (
    <Nav>
      <ul>
        {tabs.map(item => (
          <li key={item?.id} className={item?.id === currentTabId ? 'selected' : ''} onClick={handleChange(item)}>
            {item?.label}
            {item?.id === currentTabId ? <motion.div className="underline" layoutId={layoutId} /> : null}
          </li>
        ))}
      </ul>
    </Nav>
  )
}

const Nav = styled.nav`
  isolation: isolate;
  padding: 0px;
  /* border: 1px solid ${({ theme }) => theme.palette.text.tertiary}90; */
  border-radius: 8px;
  margin-top: -5px;
  margin-bottom: -5px;
  width: fit-content;
  margin-right: auto;
  ul,
  li {
    list-style: none;
    padding: 0;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.25;
    justify-content: center;
    line-height: 1;
  }

  ul {
    margin: 1px;
    display: flex;
    gap: 5px;
    width: 100%;
  }

  li {
    width: 100%;
    padding: 11px 20px;
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    flex: 1;
    position: relative;
    user-select: none;
  }

  .underline {
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    /* background: ${({ theme }) => theme.palette.background.default}; */
    background: ${({ theme }) => theme.palette.primary.main}17;
    height: 100%;
    border-radius: 10.5px;
    width: 100%;
    min-width: 100%;
    z-index: -1;
  }

  li.selected {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  @media (max-width: 370px) {
    li {
      padding: 10px 18px;
    }
  }
  @media (max-width: 355px) {
    li {
      padding: 10px 16px;
    }
  }
  @media (max-width: 338px) {
    ul,
    li {
      font-size: 0.84rem;
    }
    li {
      padding: 10px 14px;
    }
  }
  @media (max-width: 322px) {
    li {
      padding: 10px 12px;
    }
  }
`

export default TabSection
