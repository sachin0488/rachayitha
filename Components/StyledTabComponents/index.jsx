import styled from '@emotion/styled'
import Tabs, { tabsClasses } from '@mui/material/Tabs'
import Tab, { tabClasses } from '@mui/material/Tab'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { wrap } from 'popmotion'

const TabDisplay = ({ page, direction, section, sectionIndex }) => {
  return (
    <TabDisplayRoot>
      <AnimatePresence initial={true} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="display"
          transition={{
            x: { duration: 0.15 },
            opacity: { duration: 0.15 },
          }}>
          {section[sectionIndex]}
        </motion.div>
      </AnimatePresence>
    </TabDisplayRoot>
  )
}

const TabNav = ({ handleTabBar, handleChange, value, ariaLabel, tabButtonList, flexSizeEnable }) => {
  const [TabStyles, setTabStyles] = useState({})

  const generateTabStyles = () => {
    let styles = {}
    flexSizeEnable.forEach((size, index) => {
      styles[`&:nth-child(${index + 1})`] = {
        minWidth: `${size}px`,
      }
    })
    return styles
  }

  useEffect(() => {
    if (flexSizeEnable.length) setTabStyles(generateTabStyles())
  }, [flexSizeEnable.length])

  return (
    <TabSection>
      <StyledTabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="inherit"
        variant="fullWidth"
        aria-label={ariaLabel}>
        {tabButtonList.map((label, index) => (
          <StyledTab
            key={index}
            disableRipple
            label={label}
            sx={TabStyles}
            {...a11yProps(index)}
            onClick={() => handleTabBar(index)}
          />
        ))}
      </StyledTabs>
    </TabSection>
  )
}

const useStyledTab = ({ section, tabButtonList, ariaLabel, ...props }) => {
  const [value, setValue] = useState(0)
  const [[page, direction], setPage] = useState([0, 0])

  const sectionIndex = wrap(0, section.length, page)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleTabBar = index => {
    if (index < sectionIndex) {
      setPage([index, -1])
    } else if (index > sectionIndex) {
      setPage([index, 1])
    }
  }

  const TabNavProps = {
    handleTabBar,
    handleChange,
    value,
    ariaLabel,
    tabButtonList,
    flexSizeEnable: props?.flexSizeEnable || [],
  }

  const TabDisplayProps = { page, direction, section, sectionIndex }

  return { TabNavProps, TabDisplayProps }
}

export { useStyledTab, TabNav, TabDisplay }

const variants = {
  enter: direction => {
    return {
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: direction => {
    return {
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }
  },
}

const TabDisplayRoot = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: stretch;
  .display {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    position: absolute;
    width: var(--drawer-width);
    top: 0;
  }
`
const TabSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0px;
`

const StyledTab = styled(Tab)`
  display: flex;
  justify-content: flex-start;
  color: ${({ theme }) => theme.palette.text.icon};
  text-transform: capitalize;
  font-weight: 500;

  &.${tabClasses.root} {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 0.6;
    font-size: 0.8991rem;
    border-radius: 7.5px;
    min-height: 8.2px;
    white-space: nowrap;
    padding-inline: 32.4px;
  }
  &.${tabClasses.selected} {
    color: #fff;
    font-weight: 500;
  }
  transition: 0.1s ease-in 150ms;
`

const StyledTabs = styled(Tabs)`
  overflow: visible;
  & .${tabsClasses.scroller} {
    background: ${({ theme }) => theme.palette.primary.main}11;
    height: 100%;
    border-radius: 7.5px;
    overflow: visible;
    backdrop-filter: blur(5px);
  }
  min-height: 12px;
  & .${tabsClasses.indicator} {
    background: ${({ theme }) => theme.palette.primary.main};
    height: 100%;
    border-radius: 7.5px;
    z-index: -1;
  }
  max-width: fit-content;
`

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}
