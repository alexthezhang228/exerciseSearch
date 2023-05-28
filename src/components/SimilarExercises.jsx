import { Box,Stack,Typography} from '@mui/material'
import React from 'react'
import HorizontalScrollbar from './HorizontalScrollBar'

const SimilarExercises = ({targetMuscleExercises,equipmentExercise}) => {
  return (
    <Box sx={{mt:{
      lg:'100px',xs:'0'
    }}}>
      <Typography variant='h3' mb={5}>Exercises that target the same muscle group</Typography>
      <Stack direction='row' sx={{p:'2',position:'relative'}}>
        {targetMuscleExercises.length&& <HorizontalScrollbar data={targetMuscleExercises}/>}
      </Stack>

      <Typography variant='h3' mb={5}>Exercises that target the same equipment</Typography>
      <Stack direction='row' sx={{p:'2',position:'relative'}}>
        {equipmentExercise.length&& <HorizontalScrollbar data={equipmentExercise}/>}
      </Stack>
    </Box>
  )
}

export default SimilarExercises