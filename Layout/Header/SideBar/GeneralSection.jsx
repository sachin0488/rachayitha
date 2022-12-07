import { Collapse } from '@mui/material'
import { useState } from 'react'
import { sidebar } from 'config/sidebar.config'
import { MenuItemsLink, MenuTitle, IconMapping } from './styles'

const GeneralSection = ({ data }) => {
  const [isGeneralOptionsOpen, setIsGeneralOptionsOpen] = useState(true)

  return (
    <>
      <MenuTitle isOpen={isGeneralOptionsOpen} setIsOpen={setIsGeneralOptionsOpen} label="General" />
      <Collapse in={isGeneralOptionsOpen} timeout="auto" unmountOnExit>
        {data.menu.map(({ address, title, isSelected, isDisabled }, index) => (
          <MenuItemsLink
            address={address}
            title={title}
            isSelected={isSelected}
            isDisabled={isDisabled}
            iconSet={generalIcons}
            index={index}
            key={index}
          />
        ))}
      </Collapse>
    </>
  )
}

export default GeneralSection

export const generalIcons = sidebar.General.menu.map(IconMapping)
