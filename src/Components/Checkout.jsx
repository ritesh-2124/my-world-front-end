import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { useState , useEffect } from "react";
import swal from 'sweetalert';
import { useNavigate } from "react-router";




export default function Checkout() {
   const [totalprice, settotalprice] = useState([]);
   const [details , setDetailes ] = useState({
    cardName:"",
    cardNumber:"",
    expDate:"",
    cvv:""
   }) 
   const [upi , setUpi ] = useState()
  const Navigate = useNavigate()

   const paymentDetails = (e) =>{ 
      const {id ,value } = e.target;
      setDetailes({ ...details , [id] :value})  
   }

    
  const handlePay = ()=>{
   
    prompt("enter your OTP here")
    swal("your order will be delivered soon", "You clicked the button!", "success");
    setTimeout(() => {
      Navigate("/Home")
    }, 2000);
  }

   let total = 0
   useEffect(() => {
      let newData = JSON.parse(localStorage.getItem("myworldCart"));
   
   settotalprice([...newData]) 
   }, []);
  
 
  
  return (
    <React.Fragment>
    {totalprice.map((e)=>{
        total= total+Number(e.price);
    })}

    <Box mt={14}> 
       <Typography variant="h4"> total Pay Ammount - $ {total} </Typography>
    </Box>
    <Box sx={{display:"flex"}}>  <Box sx={{ width: "30%", margin: "auto",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", marginTop: "40px" , padding:"20px" }}>
        <Typography variant="h6" gutterBottom>
          Payment method(Card)
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardName"
              label="Name on card"
              fullWidth
              onChange={paymentDetails}
              autoComplete="cc-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardNumber"
              label="Card number"
              fullWidth
              onChange={paymentDetails}
              autoComplete="cc-number"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="expDate"
              label="Expiry date"
              onChange={paymentDetails}
              fullWidth
              autoComplete="cc-exp"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cvv"
              label="CVV"
              onChange={paymentDetails}
              helperText="Last three digits on signature strip"
              fullWidth
              autoComplete="cc-csc"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox color="secondary" name="saveCard" value="yes" />
              }
              label="Remember credit card details for next time"
            />
          </Grid>
          <Button
            variant="contained"
            sx={{ backgroundColor: "red", margin: "auto", marginTop:"40px"  , width: "290px" }}
           onClick={()=>{
             if(details.cardName != "" ,details.cardNumber != "", details.expDate != "", details.cvv != "" ){
               handlePay()
             }else{
               alert("please fill correct payment details")
             }
           }}
           > 
            Proceed To Pay
          </Button>
        </Grid>
      </Box>
      <Box sx={{ width: "30%", margin: "auto",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", marginTop: "40px" , padding:"20px" }}>
        <Typography variant="h6" gutterBottom>
          Payment method(UPI)
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} >
            <TextField
              required
              onChange={(e)=>{setUpi(e.target.value) 
               }}
              id="cardName"
              label="Enter Your UPI"
              fullWidth
              autoComplete="cc-name"
              variant="standard"
            />
          </Grid>
         
          <Button
            variant="contained"
            sx={{ backgroundColor: "red", margin: "auto", marginTop:"40px"  , width: "290px" }}
            onClick={()=>{ 
              swal("Good job!", "You clicked the button!", "success");
             prompt("enter your Otp here")
            }}
          >
            Proceed To Pay
          </Button>
        </Grid>
      </Box>
      </Box>
    
    </React.Fragment>
  );
}
