import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router';
import { useState , useEffect } from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { cart_data } from '../Redux/Actions/ProductAction';



const Singlepage = () => {
 const [state, setstate] = useState({});
     const {id} = useParams()
     

     const Dispatch = useDispatch();
   
     useEffect(() => {
         axios.get(`https://myworldfirst.herokuapp.com/product/${id}`).then((res)=>{
              setstate(res.data)

         })
     }, [id]);


     const CartData = JSON.parse(localStorage.getItem("myworldCart")) || [];
     const AddToCart = (e) => {
    let CheckbagSameItemCount = 0;
    for (let i = 0; i < CartData.length; i++) {
      if (e._id === CartData[i]._id) {
        CheckbagSameItemCount += 1;
        break;
      }
    }
    if (CheckbagSameItemCount === 0) {
      CartData.push(e);
      localStorage.setItem("myworldCart", JSON.stringify(CartData));
    } else {
      alert("Item already added to Bag");
    }

    Dispatch(cart_data(CartData));
  };
    return (
        <> 
        <Box sx={{marginTop:"100px" ,display:"flex"}}>
          <Box sx={{height:"400px" , width:"50%", margin:"50px" }}>
              <img src={state.image}  style={{height:"450px"  }} alt="" />
          </Box>
          <Box sx={{height:"400px" , width:"50%", margin:"50px" }}>
           <Typography variant='h5' sx={{ height:"100px"}} > {state.title}</Typography>
           <Typography variant='h7'   > {state.description}</Typography>
           <Typography variant='h4' sx={{ height:"50px" , margin:"40px"}} >Price- $ {state.price}</Typography>
           <Typography variant='h5'   >category-  {state.category}</Typography>
           <Button 
                      size="small"
                      variant="contained"
                      sx={{ backgroundColor: "red" ,margin:"40px" }}
                      onClick={() => {
                        AddToCart(state);
                      }}
                    >
                      Add To Cart
                    </Button>
          </Box>

        </Box>
        </>
    );
}

export default Singlepage;
