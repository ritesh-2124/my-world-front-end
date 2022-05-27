import { Box, Button } from '@mui/material'
import React from 'react'
import StickyFooter from './Footer'

export default function Landing() {
  return (
    <>
    <Box sx={{border: "1px solid transparent" , marginTop:"60px" , height:"690px" , display:"flex"}}>
    <Box  sx={{height:"100%" , width:"50%" }} >
   <img  src="https://res.cloudinary.com/dtks0l86r/image/upload/q_auto:low/v1638964572/Ellipse_78_pja1ds-min_sd9gqi.png" alt="" />

    </Box>
    <Box  sx={{height:"100%" , width:"50%" }} >
   <Box sx={{marginTop: "150px" , width:"800px" ,marginLeft:"-400px", color:"red" , fontSize:"150px" , fontWeight:"500"}}> Start today. </Box>
   <Box sx={{marginTop: "50px" , width:"800px" ,marginLeft:"-400px", color:"red" , fontSize:"150px" , fontWeight:"500"}}> <img src="https://res.cloudinary.com/dtks0l86r/image/upload/v1624723054/Vector_18_2_nzxrbn.png" alt="" /> </Box>
         
    </Box>

 
    </Box> 
      
      <StickyFooter/>
    </>
  )
}
