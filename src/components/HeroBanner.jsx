import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import HeroBannerImage from '../assets/images/banner.png'
const HeroBanner = () => {
  return (
    <Box sx={{
       mt:{lg:'212px',xs:'70px'},
       ml : {sm:'5px'}
    }}
        position={"relative"}
        p={"30px"}
    >
        <Typography color={"#FF2625"}
            fontWeight={"600"} fontSize={"26px"}
        >
            Fitness Club  
        </Typography>
        <Typography fontWeight={700} 
            sx={{fontSize:{lg:'44px',xs:'40px'}}}
            mb={"23px"} mt={"30px"}
        >
            Sweat,Smile <br /> and Repeat
        </Typography>
        <Typography fontSize={"22px"} lineHeight={"35px"} mb={3}>
           Check out the most effective exercises
        </Typography>
        <Button variant='contained' color='error' href='#exercises'
            sx={{
                backgroundColor:'#ff2625',
                padding:'10px'
            }}
        
        >
            Explore Exercises
        </Button>
        <Typography fontWeight={"600"} color={"#ff2625"}
        sx={{
            display:{lg:'block',xs:'none'},
            opacity:'0.1'
            
        }}
        fontSize={"200px"}
   
        >
            Exercises
        </Typography>
        <img src={HeroBannerImage} alt="Banner" className='hero-banner-img' />

    </Box>
  )
}

export default HeroBanner