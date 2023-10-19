import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import BodyPartimage from  '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'
const Detail = ({ExerciseDetail}) => {
  const {bodyPart,gifUrl,name, target,equipment } = ExerciseDetail
  const extraDetails = [
    {
      icon:BodyPartimage,
      name:bodyPart,
    },
    {
      icon:TargetImage,
      name:target
    },
    {
      icon:EquipmentImage,
      name:equipment
    }
  ]
  return (
    <Stack
      gap={"60px"}
      sx={{
        flexDirection:{lg:'row'},
        p:'20px',alignItems:'center'
      }}
    >
      <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
      <Stack sx={{gap:{lg:'40px',xs:''}}}>
        <Typography variant='h3' textTransform={"capitalize"}>
          {name}
        </Typography>
        <Typography variant='h6' >
          Exercises keeep you strong. {name} {` `}
          is one of the best exercises to target your {target}.
          It will help you improve your mood and gain energy.
        </Typography>
        {extraDetails.map((item)=>(
          <Stack key={item.name} direction={"row"} gap={"24px"} alignItems={"center"}>
            <Button sx={{background:'#fff2bd',borderRadius:'50%',width:'80px',height:'80px'}}>
              <img src={item.icon} alt={item.name} style={{width:'40px',height:'40px'}} />
            </Button>
            <Typography textTransform={"capitalize"} sx={{fontSize:{lg:'30px',xs:'20px'},fontFamily:'700'}}>
              {item.name}
            </Typography>

          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Detail