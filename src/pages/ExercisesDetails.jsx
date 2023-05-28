

import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { youtubeOptions,exerciseOptions,fetchData } from '../utils/fetchData'

import  Details from '../components/Details'
import SimilarExercises from '../components/SimilarExercises'
import ExerciseVideos from '../components/ExerciseVideos'
const ExercisesDetails = () => {
  const [exercisesDetails,setExerciseDetail]=useState({})
  const [exerciseVideos,setExerciseVideos]=useState([])
  const [targetMuscleExercises,setTargetMuscleExercisesData]=useState([])
  const [equipmentExercise,setEquipmentExerciseData]=useState([])
  const {id}=useParams()
  useEffect(()=>{
    const fetchExercisesData=async()=>{
      const exerciseEbUrl='https://exercisedb.p.rapidapi.com';
      const youtubeSearch='https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData=await fetchData(`${exerciseEbUrl}/exercises/exercise/${id}`,exerciseOptions)
      setExerciseDetail(exerciseDetailData)
    
      const exerciseVideoData=await fetchData(`${youtubeSearch}/search?query=${exerciseDetailData.name}`,youtubeOptions)
      setExerciseVideos(exerciseVideoData.contents)

      const targetMuscleExercisesData=await fetchData(`${youtubeSearch}/search?query=${exerciseDetailData.name}`,youtubeOptions)
      setTargetMuscleExercisesData(targetMuscleExercisesData.target)
      
      const equipmentExerciseData=await fetchData(`${youtubeSearch}/search?query=${exerciseDetailData.name}`,youtubeOptions)
      setEquipmentExerciseData(equipmentExerciseData.equipment)
    
    } 
    
    fetchExercisesData()
  },[id])
  return (
    

    <Box>
      <Details exerciseDetails={exercisesDetails}></Details>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exercisesDetails.name}></ExerciseVideos >
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercise={equipmentExercise}
      ></SimilarExercises>
    </Box>
  )
}

export default ExercisesDetails