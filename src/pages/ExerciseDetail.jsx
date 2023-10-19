import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercise from '../components/SimilarExercise'
const ExerciseDetail = () => {
  const [ExerciseDetail,setExerciseDetail] = useState({});
  const [exerciseVideos,setExerciseVideos] = useState([])
  const [targetMuscleExercise,settargetMuscleExercise] = useState([]);
  const [EquipmentMuscleExercise,setEquipmentMuscleExerciseData] = useState([])
  const { id } = useParams();
  useEffect(()=>{
    const fetchExercisesData = async () =>{
      const ExerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const YouTubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'
      const exerciseDetailData = await fetchData(`${ExerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions)
      setExerciseDetail(exerciseDetailData)
      const ExerciseVideoData = await fetchData(`${YouTubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeOptions)
      setExerciseVideos(ExerciseVideoData.contents);
      const targetMuscleExerciseData = await fetchData(`${ExerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,exerciseOptions)
      settargetMuscleExercise(targetMuscleExerciseData);
      const EquipmentMuscleExerciseData = await fetchData(`${ExerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOptions)
      setEquipmentMuscleExerciseData(EquipmentMuscleExerciseData);
    }
    fetchExercisesData();
  },[id])
  return (
    <Box>
      <Detail ExerciseDetail={ExerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={ExerciseDetail.name} />
      <SimilarExercise targetMuscleExercise={targetMuscleExercise} EquipmentMuscleExercise={EquipmentMuscleExercise} />
    </Box>
  )
}

export default ExerciseDetail