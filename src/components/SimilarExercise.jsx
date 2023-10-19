import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import  HorizantelScrollBar from './HorizantelScrollBar'
import NewLoader from './NewLoader'
const SimilarExercise = ({targetMuscleExercise,EquipmentMuscleExercise}) => {
  return (
    <Box sx={{mt:{lg:'100px',xs:'0'},ml:{lg:'20px'}}}  >
      <Typography  sx={{ fontSize: { lg: '40px', xs: '20px' } }} fontWeight={700} mb={5 } >Similar <span style={{color:"#ff2625"}}>Target Muscle</span> Exercises</Typography>
      <Stack direction={'row'} sx={{
        p:'2',position:'relative'
      }}
      mb={"50px"}
      >
        {targetMuscleExercise.length ? <HorizantelScrollBar data={targetMuscleExercise} />:<NewLoader />}
      </Stack>
      <Typography  sx={{ fontSize: { lg: '40px', xs: '20px' } }} fontWeight={700} mb={5} >Similar <span style={{color:'#ff2526'}}>Equipment</span> Exercises</Typography>
      <Stack direction={'row'} sx={{
        p:'2',position:'relative'
      }}
      mb={"50px"}
      >
        {EquipmentMuscleExercise.length ? <HorizantelScrollBar data={EquipmentMuscleExercise} />:<NewLoader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercise