
import React,{ useState } from 'react'
import {Box} from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import ExerciseResult from '../components/ExerciseResult'

const Home = () => {
  const [searchResults,setSearchResults]=useState([])
  const [bodyPart,setBodyPart]=useState('all')
 console.log(bodyPart)
  return (
    <Box>
      <HeroBanner />
      <SearchExercises 
      setSearchResults={setSearchResults}
      bodyPart={bodyPart}
      setBodyPart={setBodyPart}/>
      <ExerciseResult
      setSearchResults={setSearchResults}
      bodyPart={bodyPart}
      searchResults={searchResults}/>
    </Box>
  )
}
export default Home