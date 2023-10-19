import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png'
import LeftArrowIcon from '../assets/icons/left-arrow.png'
import { ScrollMenu,VisibilityContext } from 'react-horizontal-scrolling-menu';
import ExerciseCard from './ExerciseCard'
const HorizantelScrollBar = ({data,bodyPart,setBodyPart,isBodyParts}) => {
  const RightArrow = ()=>{
    const {scrollNext} = useContext(VisibilityContext)
    return (<Typography onClick={() => scrollNext()} className='right-arrow'>
            <img src={RightArrowIcon}  alt='right-arrow' />
    </Typography>)
  }
  const LeftArrow = ()=>{
    const {scrollPrev} = useContext(VisibilityContext)
    return (<Typography onClick={() => scrollPrev()} className='left-arrow'>
            <img src={LeftArrowIcon}  alt='left-arrow' />
    </Typography>)
  }
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {data.map((item)=>
            <Box key={item.id||item}
            itemId={item.id||item}
            title={item.id||item}
            margin={'0px 40px'}
            > 
            {isBodyParts? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />:<ExerciseCard exercise={item} />}
            </Box>
            )}
    </ScrollMenu>
  )
}

export default HorizantelScrollBar