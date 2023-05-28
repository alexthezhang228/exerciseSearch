
import React from 'react'
import { useState,useEffect } from 'react'
import {Box,Button,Stack,TextField,Typography} from '@mui/material'
import HorizontalScrollBar from './HorizontalScrollBar'
import { fetchData,exerciseOptions } from '../utils/fetchData'

const SearchExercises = ({setSearchResults,bodyPart,setBodyPart}) => { 
  const [search,setSearch]=useState([])
  const [bodyParts,setBodyParts]=useState([])
  
  useEffect(()=>{
    const fetchExercisesData=async()=>{
      const bodyPartsData=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions)
      console.log(bodyPartsData)
      setBodyParts(['all',...bodyPartsData])

    }
    fetchExercisesData()
  },[])
  
  const handleSearch=async()=>{
    if (search){
      const searchData=await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions)
      const searchResults=searchData.filter((result)=>{
        return result.name.toLowerCase().includes(search)||result.bodyPart.toLowerCase().includes(search)||result.target.toLowerCase().includes(search)||result.equipment.toLowerCase().includes(search)
      })

      window.scrollTo({top:1800,left:100,behavior:'smooth'})
      setSearch('')
      setSearchResults(searchResults)
    }

  }
  return (
    <Stack 
    sx={{
    alignItems:'center',
    justifyContent:'center',
    marginTop:'37px',
    padding:'20px'}}>
      <Typography 
      sx={{ 
        fontWeight:'700px',
        fontSize:{lg:'44px',xs:'33px'},
        textAlign:'center',
        marginBottom:'50px'
    }}>Awesome Exercises <br/>You May Like
      </Typography>
      <Box se={{position:'relative',marginBottom:'72px'}}>
        <TextField 
        height="76px"
        sx={{
            input:{fontWeight:'700',border:'none',borderRadius:'40px'},
            width:{lg:'800px',xs:'350px'},
            backgroundColor:'#fff',
            borderRadius:'40px'
            }}        
          onChange={(e)=>{setSearch(e.target.value)}}
          value={search}
          placeholder='Search Exercises'
          type='text'> 
        </TextField>
        <Button className='search-btn' 
          sx={{color:'#fff',
              backgroundColor:'#FF2625',
              width:{lg:'173px',xs:'80px'},
              fontSize:{lg:'20px',xs:'14px'},
              height:'56px',
              borderRadius:'50px'
              }}
          onClick={handleSearch}>
            Search</Button>
      </Box>
      <Box sx={{position:'relative',padding:'20px',width:'100%'}}>
        <HorizontalScrollBar data={bodyParts} bodyParts={bodyPart} setBodyPart={setBodyPart} isBodyParts={true}/>
      </Box>
      
    </Stack>
  )
}




export default SearchExercises