import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import {
  cart_data
} from "../Redux/Actions/ProductAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function CardDiv({e}) {
    const Dispatch = useDispatch();
  

       

    const CartData = JSON.parse(localStorage.getItem("myworldCart")) || [];
    const AddToCart = (e) => {
     let CheckbagSameItemCount = 0;
     for (let i = 0; i < CartData.length; i++) {
       if (e.id === CartData[i].id) {
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
 
     localStorage.setItem("myworldCart", JSON.stringify(CartData));
     Dispatch(cart_data(CartData));
   };



  return (
    <Box
            
                key={e._id}
                sx={{
                  height: "550px",
                  width: "350px",
                  margin: "auto",
                  marginTop: "20px",
                }}
              >
           
                <Card
                  sx={{
                    Width: "100%",
                    height: "100%",
                    padding: "0  10px",
                    marginTop: "20px",
                    boxShadow: "rgba(255, 0, 0, 0.35) 0px 5px 15px",
                  }}
                >
                  <Link to={`/singalInfo/${e._id}`  } style={{textDecoration: 'none' , color:"black"}}> 
                  <img
                    src={e.image}
                    style={{ height: "60%", width: "100%" }}
                    alt=""
                  />
                    <CardContent>
                    <Typography gutterBottom variant="h7" component="div">
                      {e.title}
                    </Typography>
                    <Typography variant="h5">${e.price} </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {e.category}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Rating- {e.rating.rate}
                    </Typography>
                  </CardContent></Link>
                  <CardActions>
                    <Button
                      size="small"
                      variant="contained"
                      sx={{ backgroundColor: "red" }}
                      onClick={() => {
                        AddToCart(e);
                      }}
                    >
                      Add To Cart
                    </Button>
                  </CardActions>
                </Card>
              </Box>
  )
}
