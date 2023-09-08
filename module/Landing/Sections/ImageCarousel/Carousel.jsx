import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MobileStepper from '@mui/material/MobileStepper'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

function Carousel({ imageList }) {
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = imageList.length

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleStepChange = step => {
    setActiveStep(step)
  }

  return (
    <Box sx={{ maxWidth: '100%', flexGrow: 1 }}>
      {/* <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}>
        <Typography>{imageList[activeStep].label}</Typography>
      </Paper> */}
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        style={{ borderRadius: '10px', marginBottom: '10px', boxShadow: '1px 3px 20px 1px #0f012f16', zIndex: '100' }}>
        {imageList.map((step, index) => (
          <div
            key={step.label}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
            }}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  //   height: 255,
                  maxWidth: '100%',
                  overflow: 'hidden',
                  width: '100%',
                  aspectRatio: '16/9',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  padding: '0px',
                  margin: '0px',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        style={{
          zIndex: '-1',
          backgroundColor: 'transparent',
        }}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </Box>
  )
}

export default Carousel
