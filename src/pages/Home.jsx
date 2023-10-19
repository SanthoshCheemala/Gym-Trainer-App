import { Box } from '@mui/material'
import React, { useState } from 'react'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SerachExercises'
import Exercises from '../components/Exercises'
const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart,setBodyPart] = useState('all')
  console.log(exercises)
  return (
   <Box>
      <HeroBanner />
      <SearchExercises setBodyPart={setBodyPart} bodyPart={bodyPart} setExercises={setExercises}/>
      <Exercises  setExercises={setExercises} bodyPart={bodyPart} exercises={exercises}  />
   </Box>
  )
}

export default Home