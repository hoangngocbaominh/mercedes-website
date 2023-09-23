// import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
// import { Box, Button, Paper, Typography, useTheme } from '@mui/material'
// import React from 'react'
// import MobileStepper from '@mui/material/MobileStepper'
// import { autoPlay } from 'react-swipeable-views-utils'


// const AutoPlaySwipeableViews = autoPlay();
// const images = [
//     {
//         label: 'Lựa chọn là của bạn',
//         imgPath:
//             'https://www.mercedes-benz.com.vn/content/vietnam/vi/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569_1730019915/simple_teaser_item_1_1922196540.component.damq6.3383348917154.png/C-E.png',
//     },
//     {
//         label: 'Khám phá các ưu đãi hiện có',
//         imgPath:
//             'https://www.mercedes-benz.com.vn/content/vietnam/vi/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569_1730019915/simple_teaser_item_1880698007.component.damq6.3382764017350.jpg/simple-teaser-item-thumbnail-offers-campaign.jpg',
//     },
//     {
//         label: 'Mercedes-Benz GLC mới',
//         imgPath:
//             'https://www.mercedes-benz.com.vn/content/vietnam/vi/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569_1730019915/simple_teaser_item_1428272920.component.damq2.3380687894217.jpg/GLC%20X254.jpg',
//     },
//     {
//         label: 'Tri ân khách hàng thân thiết',
//         imgPath:
//             'https://www.mercedes-benz.com.vn/content/vietnam/vi/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569_1730019915/simple_teaser_item_1_1992557652.component.damq6.3379862350659.png/simple-teaser-item-loyalty-program.png',
//     },
//     {
//         label: 'Mercedes-AMG C 43 4MATIC',
//         imgPath:
//             'https://www.mercedes-benz.com.vn/content/vietnam/vi/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569_1730019915/simple_teaser_item_1858074757.component.damq6.3379780808184.jpg/mercedes-amg-c-43-4matic.jpg',
//     },
//     {
//         label: 'Nguyên mẫu xe thuần điện VISION EQXX',
//         imgPath:
//             'https://www.mercedes-benz.com.vn/content/vietnam/vi/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569_1730019915/simple_teaser_item_553500675.component.damq6.3352644032604.png/simple-teaser-vision-eqxx.png',
//     },
// ];

// function Carousel() {
//     const theme = useTheme();
//     const [activeStep, setActiveStep] = React.useState(0);
//     const maxSteps = images.length;

//     const handleNext = () => {
//         setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     };

//     const handleBack = () => {
//         setActiveStep((prevActiveStep) => prevActiveStep - 1);
//     };

//     const handleStepChange = (step) => {
//         setActiveStep(step);
//     };

//     return (
//         <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
//             <Paper
//                 square
//                 elevation={0}
//                 sx={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     height: 50,
//                     pl: 2,
//                     bgcolor: 'background.default',
//                 }}
//             >
//                 <Typography>{images[activeStep].label}</Typography>
//             </Paper>
//             <AutoPlaySwipeableViews
//                 axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//                 index={activeStep}
//                 onChangeIndex={handleStepChange}
//                 enableMouseEvents
//             >
//                 {images.map((step, index) => (
//                     <div key={step.label}>
//                         {Math.abs(activeStep - index) <= 2 ? (
//                             <Box
//                                 component="img"
//                                 sx={{
//                                     height: 255,
//                                     display: 'block',
//                                     maxWidth: 400,
//                                     overflow: 'hidden',
//                                     width: '100%',
//                                 }}
//                                 src={step.imgPath}
//                                 alt={step.label}
//                             />
//                         ) : null}
//                     </div>
//                 ))}
//             </AutoPlaySwipeableViews>
//             <MobileStepper
//                 steps={maxSteps}
//                 position="static"
//                 activeStep={activeStep}
//                 nextButton={
//                     <Button
//                         size="small"
//                         onClick={handleNext}
//                         disabled={activeStep === maxSteps - 1}
//                     >
//                         Next
//                         {theme.direction === 'rtl' ? (
//                             <KeyboardArrowLeft />
//                         ) : (
//                             <KeyboardArrowRight />
//                         )}
//                     </Button>
//                 }
//                 backButton={
//                     <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
//                         {theme.direction === 'rtl' ? (
//                             <KeyboardArrowRight />
//                         ) : (
//                             <KeyboardArrowLeft />
//                         )}
//                         Back
//                     </Button>
//                 }
//             />
//         </Box>
//     )
// }
// export default Carousel


