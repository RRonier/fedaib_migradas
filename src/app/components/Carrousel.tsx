"use client"
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    key: 1,
    imgPath:
      '/assets/img-20141111-wa0028.jpg',
  },{
    key: 2,
    imgPath:
      '/assets/img-20141111-wa0029.jpg',
  },{
    key: 3,
    imgPath:
      '/assets/img-20141111-wa0030.jpg',
  },{
    key: 4,
    imgPath:
      '/assets/img-20141111-wa0032.jpg',
  },{
    key: 5,
    imgPath:
      '/assets/img-20141111-wa0034.jpg',
  },{
    key: 6,
    imgPath:
      '/assets/img-20141111-wa0035.jpg',
  },{
    key: 7,
    imgPath:
      '/assets/img-20141111-wa0036.jpg'
    },{
    key: 8,
    imgPath:
      '/assets/img-20141111-wa0038.jpg',
  },{
    key: 9,
    imgPath:
      '/assets/img-20141111-wa0039.jpg',
  },{
    key: 10,
    imgPath:
      '/assets/img-20141111-wa00311.jpg',
  },
  {
    key: 11,
    imgPath:
      '/assets/img-20141111-wa00331.jpg',
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 800, flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <div key={step.label}>
                <Box
                  component="img"
                  sx={{
                    height: "100%",
                    display: 'block',
                    maxWidth: 800,
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              </div>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;