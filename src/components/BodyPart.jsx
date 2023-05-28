
import React from 'react'
import { Stack,Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png'

const BodyPart = ({item,bodyPart,setBodyPart}) => {
  return (
    <Stack
    type='button'
    alignItems='center'
    justifyContent='center'
    className='bodyPart-card'
    onClick={()=>{
      setBodyPart(item)
      window.scrollTo({top:1800,left:100,behavior:'smooth'})
    }}
    sx={{
      borderTop:bodyPart===item?'4px solid #ff2625':'',
      borderBottomLeftRadius:'20px',
      width:'270px',
      height:'280px',
      cursor:'pointer',
      gap:'47px'
    }}>
      <img src={Icon} alt='dumbbell' style={{width:'40px',height:'40px'}}></img>
      <Typography
      fontSize='24px'
      textTransform='capitalize'
      fontWeight='bold'
      color='#3A1212'
      >{item}</Typography>
    </Stack>
  )
}

export default BodyPart