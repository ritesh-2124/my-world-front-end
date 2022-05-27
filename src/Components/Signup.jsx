import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Link} from "react-router-dom"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useDispatch  , useSelector} from 'react-redux';
import {SignupData} from "../Redux/Actions/SignupAction"

const theme = createTheme();

export default function SignUp() {
    const [state, setstate] = useState({
      fullName:"",
      password:"",
      email:"",
      Contect:""

    });

    const Dispatch = useDispatch()
    const result = useSelector((store)=>store.SignupFatch)
 
    
    const Data = (e)=>{
      const {id , value} = e.target;
      setstate({...state, [id]:value})
    }
    

    
    const handleSubmit = (event) => {
      event.preventDefault();
    Dispatch(SignupData(state))
  };
 
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 12,
            boxShadow: "rgba(245, 0, 0, 0.24) 0px 3px 8px",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: "20px",
            width: "500px",
            marginLeft:"-50px"
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="fullName"
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  autoFocus
                  onChange={Data}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={Data}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  onChange={Data}
                  fullWidth
                  name="password"
                  label="password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
               <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  onChange={Data}
                  id="Contect"
                  label="Contect"
                  name="Contect"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 , backgroundColor: "red"}}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link  style={{textDecoration:"none" , color:'#1976d2'} } to={"/LogIn"}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}