import { Typography } from '@mui/material'
import React from 'react'
import { BsFillFlagFill } from 'react-icons/bs'
import { AboutSectionWrapper, AboutSectionUpperContent } from '../../Common/BookDetailStyle'
const BookAboutContent = () => {
  return (
    <>
      <AboutSectionWrapper>
        <AboutSectionUpperContent>
          <Typography style={{ color: '#2C2B5B' }}>Synopsis</Typography>
          <Typography style={{ fontSize: '12px', fontWeight: '300', lineHeight: '14px' }}>
            “Discovered the corpse of an ordinary human, loot to receive Super-strength Pill, extract?”
          </Typography>
          <Typography style={{ fontSize: '12px', fontWeight: '300', lineHeight: '14px' }}>“Yes!”</Typography>
          <Typography style={{ fontSize: '12px', fontWeight: '300', lineHeight: '14px' }}>“Yes!”</Typography>
          <Typography style={{ fontSize: '12px', fontWeight: '300', lineHeight: '14px' }}>
            “Discovered the Demonic Body of the Hellbound Domination Emperor, loot to receive Sun-swallowing Cerberus,
            extract?”
          </Typography>
        </AboutSectionUpperContent>
        <AboutSectionUpperContent>
          <Typography style={{ color: '#2C2B5B' }}>Tags</Typography>
          <Typography style={{ color: '#5A2CC6', fontSize: '12px', fontWeight: '500' }}>
            # SYSTEM # CULTIVATION # LEVELUP{' '}
          </Typography>
          <Typography style={{ color: '#2C2B5B' }}>
            <BsFillFlagFill /> Report Story
          </Typography>
        </AboutSectionUpperContent>
      </AboutSectionWrapper>
    </>
  )
}

export default BookAboutContent
