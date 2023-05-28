import React, { useEffect, useState } from 'react'; 
import Pagination from '@mui/material/Pagination';

import {Box,Stack,Typography} from '@mui/material'
import { fetchData,exerciseOptions } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'

const ExerciseResult = ({setSearchResults,bodyPart,searchResults}) => {
  
  const[currentPage,setCurrrentPage]=useState(1)
  const exercisesPerPage=9
  const paginate=(e,value)=>{
    setCurrrentPage(value)
    window.scrollTo({top:1800,behavior:'smooth'})
  }
  const indexOfLastExercise=currentPage*exercisesPerPage
  const indexOfFirstExercise=indexOfLastExercise-exercisesPerPage
  const currentExercises=searchResults.slice(indexOfFirstExercise,indexOfLastExercise)
  return (
    <Box  
    id='exercises'
    sx={{mt:{lg:'110px'}}}
    mt='50px'
    p='20px'>
      <Typography variant='h3' mt='46px'>RESULTS</Typography>
      <Stack 
      direction='row' 
      sx={{gap:{lg:'110px',xs:'50px'}}}
      flexWrap='wrap'
      justifyContent='center'>
        {currentExercises.map((result,index)=>{
          return (
            <ExerciseCard key={index} exercise={result}>{result.name}</ExerciseCard>
          )
        })}
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {searchResults.length > 9 && (
          <Pagination 
          color='standard' 
          shape='rounded'
          defaultPage={1}
          count={Math.ceil(searchResults.length/exercisesPerPage)}
          page={currentPage}
          onChange={paginate}
          size='large'>
          </Pagination>
        )}
      </Stack>
    </Box>
  )
}

export default ExerciseResult