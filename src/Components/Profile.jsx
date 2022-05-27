import React from 'react'
import { useSelector  , useDispatch} from 'react-redux'
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import { Box } from '@mui/system';
import { Button, TextField } from '@mui/material';
import { logout } from '../Redux/Actions/LoginAction';
import { useNavigate } from 'react-router';




export default function Profile() {
 
    const {user} = useSelector((store)=>store.LoginFatch)
   const Dispatch = useDispatch()
   const Navigate = useNavigate()

     
   const handleLogout = ()=>{
    Dispatch(logout())
   Navigate("/")
}


  return (
      <Box sx={{margin:"auto" , height:"500px" , width:"300px", marginTop:"130px" ,boxShadow: "rgba(252, 11, 11, 0.24) 0px 3px 8px" , padding:"20px", borderRadius:"20px" }}>
   <Avatar sx={{ bgcolor: deepOrange[500] , height:"150px", width:"150px", fontSize:"100px" , margin:"auto", marginLeft:"80px" }}>{user.fullname}</Avatar>
   <Box sx={{margin:"auto" , marginTop:"30px" }}>
   <TextField
          id="filled-read-only-input"
          label="Full Name"
          defaultValue={user.fullName}
          InputProps={{
            readOnly: true,
          }}
          sx={{marginTop:"10px" , width:"300px"}}
          variant="outlined"
        />
   <TextField
          id="filled-read-only-input"
          label="Email"
          defaultValue={user.email}
          InputProps={{
            readOnly: true,
          }}
          sx={{marginTop:"15px" , width:"300px"}}
          variant="outlined"
        />
         <TextField
          id="filled-read-only-input"
          label="Contect"
          defaultValue={user.Contect}
          InputProps={{
            readOnly: true,
          }}
          sx={{marginTop:"15px" , width:"300px"}}
          variant="outlined"
        />
</Box>
 <Button onClick={handleLogout} variant="contained" sx={{marginTop:"20px" , backgroundColor:"red"}}>Logout</Button>

      </Box>

  )
}
