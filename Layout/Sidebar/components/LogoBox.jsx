import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined'
import styled from '@emotion/styled'
import React from 'react'
import Link from 'next/link'
import { t } from 'i18next'
import { useTranslation } from 'react-i18next'
const LogoBox = () => {
  const { t } = useTranslation();
  return (
    <Link href={'/'}>
      <a>
        <Root>
          <AutoStoriesOutlinedIcon
            style={{
              fontSize: 29,
            }}
          />
          <Text>{t('e_book')}</Text>
        </Root>
      </a>
    </Link>
  )
}

const Root = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.palette.secondary.main};
`

const Text = styled.div`
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: 700;
  font-size: 1.3rem;
  white-space: nowrap;
`

export default LogoBox
