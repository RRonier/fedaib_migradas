"use client"
import React, { FC, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { MobileStepper, Skeleton, Button, Box } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

interface ArrayImages {
  key: number;
  imgPath: string;
}

interface CarrouselProps {
  images: ArrayImages[]
}

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const SwipeableTextMobileStepper: FC<any> = ({ images }) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
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
        animateHeight
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images && images.map((step: any, index: number) => (
          <React.Fragment key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <div key={step.imgPath}>
                <Box
                  component="img"
                  sx={{
                    height: "fit-content",
                    display: 'block',
                    maxWidth: 800,
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  src={step.imgPath}
                  alt={step.imgPath}
                />
              </div>
            ) : null}
          </React.Fragment>
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