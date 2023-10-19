import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizantelScrollBar from './HorizantelScrollBar' 


const SearchExercises = ({bodyPart,setExercises,setBodyPart,}) => {
    const [Search, SetSearch] = useState('')
    const [BodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
            setBodyParts(['all', ...bodyPartData]);
        }
        fetchExercisesData();  
    }, []);

    const handleSearch = async () => {
        if (Search) {
          let exercisesData =     await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
    
       
      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(Search)
               || item.target.toLowerCase().includes(Search)
               || item.equipment.toLowerCase().includes(Search)
               || item.bodyPart.toLowerCase().includes(Search),
      );

          window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
          SetSearch('');
          setExercises(searchedExercises);
         
        }
      };
      

    return (
        <Stack alignItems={'center'} mt={"37px"} justifyContent={"center"} p={"20px"}>
            <Typography fontWeight={"700"} sx={{
                fontSize: { lg: '44px', xs: '30px' },
                textAlign: 'center',
                mb: '50px'
            }}>
                Awesome Exercises You <br />
                Should Know
            </Typography>
            <Box position={"relative"} mb="72px">
                <TextField
                    sx={{
                        input: {
                            fontWeight: '700',
                            border: 'none',
                            borderRadius: '4px'
                        },
                        width: { lg: '800px', sm: '350px' },
                        backgroundColor: '#fff',
                        borderRadius: '40px'
                    }}
                    height="76px"
                    value={Search}
                    onChange={(e) => SetSearch(e.target.value.toLowerCase())}
                    placeholder='Search Exercises'
                    type='text'
                />
                <Button className='search-btn' sx={{
                    bgcolor: '#FF2625',
                    color: '#fff',
                    textTransform: 'none',
                    width: { lg: '175px', xs: '80px' },
                    fontSize: { lg: '20px', xs: '14px' },
                    height: '56px',
                    position: 'absolute',
                    right: '0'
                }}
                    onClick={handleSearch} 
                >
                    Search
                </Button>
            </Box>
            <Box sx={{
                position: 'relative',
                width: '100%',
                p: '20px',
            }}>
                <HorizantelScrollBar data={BodyParts}  bodyPart={bodyPart} setBodyPart={setBodyPart}  isBodyParts  />
            </Box>
        </Stack>
    )
}

export default SearchExercises; 
