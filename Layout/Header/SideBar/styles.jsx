import styled from '@emotion/styled'
import { IconButton, ListItem, ListItemButton, useTheme } from '@mui/material'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import useNavigationSet from '@hooks/useNavigationSet'

export const fontSize = 23 * 0.79

export const MenuTitle = ({ isOpen, setIsOpen, label }) => {
  return (
    <DrawerTitle onClick={() => setIsOpen(!isOpen)}>
      <strong>{label}</strong>
      <hr />
      <KeyboardArrowDownRoundedIcon
        style={{
          transform: isOpen ? `rotate(0deg)` : `rotate(-90deg)`,
          transition: `0.250s ease-in-out`,
        }}
      />
    </DrawerTitle>
  )
}

export const MenuItemsLink = props => {
  const { address, title, isSelected, isDisabled, iconSet, index } = props
  const theme = useTheme()
  const { navigateByAddress } = useNavigationSet()
  const IconStyles = isSelected => {
    return {
      color: isSelected ? theme.palette.primary.light : theme.palette.text.secondary,
      fill: isSelected ? theme.palette.primary.light : theme.palette.text.secondary,
      padding: 6.5,
    }
  }

  return (
    <DrawerListItem
      button
      key={index}
      onClick={() => navigateByAddress(address)}
      is_selected={isSelected ? 'selected' : ''}
      disabled={isDisabled}>
      <IconButton component="div" className="listItem__icon" style={IconStyles(isSelected)} disableRipple>
        {iconSet[index]}
      </IconButton>
      <strong className="listItem__text" children={title} />
    </DrawerListItem>
  )
}

export const MenuItemsButton = ({ address, title, isSelected, iconSet, index }) => {
  const theme = useTheme()
  const { navigateModulesByTitle } = useNavigationSet()
  const IconStyles = isSelected => {
    return {
      color: isSelected ? theme.palette.primary.light : theme.palette.text.secondary,
      fill: isSelected ? theme.palette.primary.light : theme.palette.text.secondary,
      padding: 6.5,
    }
  }
  // DrawerListItemButton

  const Icon = iconSet[index]

  return (
    <DrawerListItem
      button
      key={index}
      onClick={() => navigateModulesByTitle(title)}
      is_selected={isSelected ? 'selected' : ''}>
      <IconButton component="div" className="listItem__icon" style={IconStyles(isSelected)} disableRipple>
        {Icon}
      </IconButton>
      <strong className="listItem__text" children={title} />
    </DrawerListItem>
  )
}

export const DrawerTitle = styled(ListItemButton)`
  display: flex;
  justify-content: flex-start;
  color: ${({ theme }) => theme.palette.text.secondary};
  min-height: 28px;
  padding-top: 0;
  padding-bottom: 0;
  align-items: center;
  padding-left: 11px;
  padding-right: 7px;
  strong {
    text-transform: capitalize;
    font-size: 0.85rem;
  }
  hr {
    border: 0;
    margin-left: 7px;
    margin-right: 0px;
    flex-grow: 1;
    height: 2px;
    background: ${({ theme }) => theme.palette.text.tertiary};
  }
`

export const DrawerListItem = styled(ListItem)`
  display: flex;
  justify-content: flex-start;
  color: ${({ theme }) => theme.palette.text.secondary};
  min-height: 20px;
  padding-top: 0;
  padding-bottom: 0;
  align-items: center;
  border-left: 4px solid transparent;
  padding-left: 4px;
  padding-right: 2.5px;
  && {
    ${({ is_selected, theme }) => is_selected && `border-left: 4px solid ${theme.palette.primary.main}`}
  }
  transition: border-left 0.1s ease-in;
  & .listItem__icon {
    margin-right: 6px;
  }
  & .listItem__text {
    text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -webkit-box-align: center;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    font-family: 'Chakra Petch', sans-serif;
    line-height: 1.3;
    overflow: hidden;
    white-space: nowrap;
    text-align: center;
    color: ${({ theme }) => theme.palette.text.secondary};
    text-transform: capitalize;
    font-weight: 500;
    font-size: 0.78rem;
  }
`

export const DrawerListItemButton = styled(ListItem)`
  display: flex;
  justify-content: flex-start;
  color: ${({ theme }) => theme.palette.text.secondary};
  /* min-height: 30px; */
  margin-top: 7px;
  padding-top: 0;
  padding-bottom: 0;
  align-items: center;
  transition: border-left 0.2s ease-in-out;
  margin-left: 20px;
  width: 80%;
  border-radius: 7px;
  && {
    ${({ is_selected, theme }) => is_selected && `background: ${theme.palette.primary.main}12`}
  }
  & .listItem__icon {
    margin-right: 8.5px;
    padding: 6px;
  }
  & .listItem__text {
    text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -webkit-box-align: center;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    font-family: 'Chakra Petch', sans-serif;
    line-height: 1.3;
    overflow: hidden;
    white-space: normal;
    text-align: center;
    color: ${({ theme }) => theme.palette.text.secondary};
    text-transform: capitalize;
    font-weight: 600;
    font-size: calc(0.89rem);
  }
`
export const IconMapping = item => <item.Icon style={{ fontSize }} />
