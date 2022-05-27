import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useDispatch } from "react-redux";
import { cart_data } from "../Redux/Actions/ProductAction";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";




export default function AddressForm() {
  const [state, setState] = useState([]);
  const [formvalue , setFormvalue] = useState({
    firstName:"",
    lastName:"",
    address1:"",
    address2:"",
    city:"",
    state1:"",
    zip:"",
    country:""
  })
  const Dispatch = useDispatch();
  let totalAmount = 0;

 
  const handleAddress = (e) =>{
    let {id , value} = e.target;
    setFormvalue({...formvalue , [id]:value})
  }
 


  const quentityInc = (id) => {
    let temp = [...state];
    temp = temp.filter((e) => {
      if (e.id == id) {
        e.qty = e.qty + 1;
      }
      return e;
    });
    localStorage.setItem("myworldCart", JSON.stringify([...temp]));

    let newData = JSON.parse(localStorage.getItem("myworldCart"));
    setState([...newData]);
 
  };
  const quentityDic = (id) => {
    let temp = [...state];
    temp = temp.filter((e) => {
      if (e.id == id) {
        e.qty = e.qty - 1;
      }
      return e;
    });
    localStorage.setItem("myworldCart", JSON.stringify([...temp]));

    let newData = JSON.parse(localStorage.getItem("myworldCart"));
    setState([...newData]);
  };

  useEffect(() => {
    const cartdata = JSON.parse(localStorage.getItem("myworldCart"));
    
    setState([...cartdata]);
  }, []);
   

  const handleSubmit =() =>{
   
      localStorage.setItem("addressOfMyworld" , JSON.stringify([formvalue]))
  }


  const DeleteItem = (index) => {
    state.splice(index, 1);
    localStorage.setItem("myworldCart", JSON.stringify(state));

    let newData = JSON.parse(localStorage.getItem("myworldCart"));
    setState([...newData]);
    Dispatch(cart_data(state));
  };



  return (
    <>
    <Box sx={{display:"flex"}}> 
      <Box
        sx={{
          width: "35%",
          padding: "20px",
          borderRadius: "10px",
          margin: "auto",
          marginTop: "80px",
          height: "600px",
          boxShadow: "rgba(243, 7, 7, 0.603) 0px 3px 8px"
        }}
      >
        <Typography variant="h6" gutterBottom>
          Shipping address
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="given-name"
              variant="standard"
              onChange={handleAddress}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
               onChange={handleAddress}
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="family-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
               onChange={handleAddress}
              id="address1"
              name="address1"
              label="Address line 1"
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address2"
              name="address2"
              label="Address line 2"
              fullWidth
              autoComplete="shipping address-line2"
              variant="standard"
              onChange={handleAddress}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
               onChange={handleAddress}
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="shipping address-level2"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="state1"
              name="state1"
              label="State/Province/Region"
              fullWidth
              variant="standard"
              onChange={handleAddress}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
               onChange={handleAddress}
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="shipping postal-code"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
               onChange={handleAddress}
              id="country"
              name="country"
              label="Country"
              fullWidth
              autoComplete="shipping country"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox color="secondary" name="saveAddress" value="yes" />
              }
              label="Use this address for payment details"
            />
          </Grid>
        </Grid>
        <Link to={"/cartpage/Address/chackout"} style={{textDecoration:"none"}}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "red", margin: "40px", width: "290px" }}
          
          onClick={()=>{
            if(formvalue.state1 != ""  && formvalue.city != ""  && formvalue.address1 != ""  && formvalue.firstName != "" && formvalue.lastName != "" && formvalue.zip != "" && formvalue.country != ""){
              handleSubmit()
            }else{
              alert("pura bhar de bhai")
            }
          }}
        >
          Proceed To pay
        </Button>
        </Link>
      </Box>
       <Box sx={{width:"60%"}}>
       <Box
            sx={{
              height: "650px",
              Width: "55%",
              paddingBottom: "30px",
              overflow: "auto",
              marginTop: "70px",
            }}
          >
            {state.map((e, index) => {
              totalAmount += e.price * e.qty;
              return (
                <Card
                  key={e.id}
                  sx={{
                    textAlign: "start",
                    maxWidth: "95%",
                    height: "160px",
                    margin: "auto",
                    display: "flex",
                    gap: "20px",
                    marginTop: "20px",
                    border:"1px solid red",
                    boxShadow: "rgba(236, 0, 0, 0.473) 0px 2px 8px 0px"
                  }}
                >
                  <Box sx={{ height: "100%", width: "200px" }}>
                    <img
                      src={e.image}
                      style={{ height: "150px", padding: "5px", width: "100%" }}
                      alt=""
                    />
                  </Box>
                  <Box sx={{ width: "500px" , marginRight:"-50px" }}>
                    <CardContent>
                      <Typography gutterBottom variant="h8" component="div">
                        {e.title}
                      </Typography>
                      <Typography variant="h4" color="text.secondary">
                        $ {e.price}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Save for latter</Button>
                    </CardActions>
                  </Box>
                  <Box sx={{ margin: "auto", display: "flex" }}>
                    <ButtonGroup disableElevation sx={{ marginRight:"50px"}} variant="contained">
                      <Button
                        sx={{ width: "100px", fontSize:"20px" ,backgroundColor: "red", margin: "10px" }}
                        onClick={() => {
                          quentityInc(e.id);
                        }}
                      >
                        +
                      </Button>
                      <h4>{e.qty}</h4>
                      <Button
                        sx={{ width: "100px", fontSize:"20px" , backgroundColor: "red", margin: "10px" }}
                        onClick={() => {
                          if (e.qty == 1) {
                            alert("Delating the porduct");
                            DeleteItem(index);
                          } else {
                            quentityDic(e.id);
                          }
                        }}
                      >
                        -
                      </Button>
                    </ButtonGroup>
                    <IconButton
                      aria-label="delete"
                      onClick={() => {
                        DeleteItem(index);
                      }}
                      ml="200px"
                      size="large"
                    >
                      <DeleteIcon  fontSize="inherit" />
                    </IconButton>
                  </Box>
                </Card>
              );
            })}
          </Box>
       </Box>
       
      </Box>
    </>
  );
}
