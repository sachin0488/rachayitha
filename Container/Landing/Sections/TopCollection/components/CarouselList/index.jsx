import { useCallback, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { Box } from '@mui/material'
import { wrap } from 'popmotion'

import VMSBox from './VMSBox'
import { useFormContext } from 'react-hook-form'

const CarouselList = () => {
  const formMethods = useFormContext()

  const activeCmdMessageIndex = formMethods.watch('activeCmdMessageIndex')
  const activeScenarioIndex = formMethods.watch('activeScenarioIndex')

  const activeLayoutIndex = formMethods.watch(`activeLayoutIndex`)
  const messages = formMethods.watch(
    `cmdMessageList[${activeCmdMessageIndex}].cmd_message.Scenario[${activeScenarioIndex}].Layout`,
  )

  const activeSectionPath = `cmdMessageList[${activeCmdMessageIndex}].cmd_message.Scenario[${activeScenarioIndex}].Layout`

  const selectedMessagePath = `cmdMessageList[${activeCmdMessageIndex}].cmd_message.Scenario[${activeScenarioIndex}].Layout[${activeLayoutIndex}]`

  const handleSelectMessage = useCallback(
    index => {
      formMethods.setValue('activeLayoutIndex', index)
    },
    [activeSectionPath, messages],
  )

  const [isViewDisplay, setView] = useState(true)
  const [[page, direction], setPage] = useState([0, 0])
  const msgIndex = wrap(0, messages.length, page)

  const handleDeleteMessage = useCallback(() => {}, [])

  const handleViewToggle = () => {
    setView(!isViewDisplay)
  }

  const viewBoxProps = {
    messages,
    handleDeleteMessage,
    errorMessage: 'Error message: Communication error',
    isError: false,
    pageState: [[page, direction], setPage],
    handleViewToggle,
    msgIndex,
    handleSelectMessage,
    activeLayoutIndex,
    selectedMessagePath,
  }

  useEffect(() => {
    handleSelectMessage(msgIndex)
  }, [msgIndex])

  return (
    <Root
      style={{
        height: 'calc(var(--drawer-width) * 0.3770)',
      }}>
      <VMSBox {...viewBoxProps} />
    </Root>
  )
}

export default CarouselList

const Root = styled(Box)`
  position: relative;
  margin-top: 12px;

  & > .toggle__viewBtn {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 100;
    color: #fffa;
    font-weight: 700;
    background: ${({ theme }) => theme.palette.primary.light}22;
    background: #fff1;
    backdrop-filter: blur(12px);
    border-top-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`
