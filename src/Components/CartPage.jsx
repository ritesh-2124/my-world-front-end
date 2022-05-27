import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useDispatch } from "react-redux";
import { cart_data } from "../Redux/Actions/ProductAction";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

const Cartpage = () => {
  const [state, setState] = useState([]);
  const Dispatch = useDispatch();
  let totalAmount = 0;

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

  const DeleteItem = (index) => {
    state.splice(index, 1);
    localStorage.setItem("myworldCart", JSON.stringify(state));

    let newData = JSON.parse(localStorage.getItem("myworldCart"));
    setState([...newData]);
    Dispatch(cart_data(state));
  };



  return (
    <>
      {state.length == 0 ? (
        <Box sx={{ margin: "auto", height: "300px", width: "900px" }}>
          <img
            src="https://assets.materialup.com/uploads/66fb8bdf-29db-40a2-996b-60f3192ea7f0/preview.png"
            alt=""
          />
          <br />
          <Link to={"/Home"} style={{ textDecoration: "none" }}>
            {" "}
            <Button sx={{ backgroundColor: "red" }} variant="contained">
              Continue Shopping
            </Button>
          </Link>
        </Box>
      ) : (
        <Box sx={{ display: "flex" }}>
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
                    height: "200px",
                    margin: "auto",
                    display: "flex",
                    gap: "20px",
                    marginTop: "40px",
                    border: "1px solid red",
                    boxShadow: "rgba(236, 0, 0, 0.473) 0px 2px 8px 0px",
                  }}
                >
                  <Box sx={{ height: "100%", width: "200px" }}>
                    <img
                      src={e.image}
                      style={{ height: "200px", padding: "5px", width: "100%" }}
                      alt=""
                    />
                  </Box>
                  <Box sx={{ width: "500px", marginRight: "-50px" }}>
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
                    <ButtonGroup
                      disableElevation
                      sx={{ marginRight: "50px" }}
                      variant="contained"
                    >
                      <Button
                        sx={{
                          width: "100px",
                          fontSize: "20px",
                          backgroundColor: "red",
                          margin: "10px",
                        }}
                        onClick={() => {
                          quentityInc(e.id);
                        }}
                      >
                        +
                      </Button>
                      <h4>{e.qty}</h4>
                      <Button
                        sx={{
                          width: "100px",
                          fontSize: "20px",
                          backgroundColor: "red",
                          margin: "10px",
                        }}
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
                      <DeleteIcon fontSize="inherit" />
                    </IconButton>
                  </Box>
                </Card>
              );
            })}
          </Box>
          <Box
            sx={{
              marginTop: "170px",
              textAlign: "start",
              width: "25%",
              marginLeft: "50px",
              height: "50%",
            }}
          >
            <Box m={5}>
              <h2>Total Amount - $ {totalAmount.toFixed(2)}</h2>
              <p>
                ShipingCharge
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-
                $ 0
              </p>
              <p>
                All taxes
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-
                Free{" "}
              </p>
            </Box>
            <Box m={5}>
              <TextField
                id="standard-basic"
                label="Enter PromoCode here.."
                variant="standard"
              />
              <Button
                variant="contained"
                sx={{ backgroundColor: "red", margin: "10px" }}
              >
                submit
              </Button>
            </Box>
            <Link to={"/cartpage/Address"} style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "red", margin: "40px", width: "290px" }}
              >
                Chakeout &nbsp;&nbsp; <LockIcon /> &nbsp;&nbsp; $
                {totalAmount.toFixed(2)}
              </Button>
            </Link>{" "}
          </Box>
        </Box>
      )}
    </>
  );
};

export default Cartpage;
