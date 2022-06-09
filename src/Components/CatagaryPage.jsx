import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Grid } from "@mui/material";
import axios from "axios";
import { Box } from "@mui/system";
import CardDiv from "./Card";
import Shorting from "./Shorting";

const CatagaryPage = () => {
  const [state, setstate] = useState([]);
  const { category } = useParams();
  
  useEffect(() => {
    axios
      .get("https://myworldfirst.herokuapp.com/product")
      .then((res) =>
        setstate([...res.data.filter((el) => el.category === category)])
        );
  }, [category]);


  return (
    <Box mt={7}>
    <Shorting />
    <Grid container spacing={2}>

    {state.map((e)=>{
    
     return  <CardDiv key={e.id} e = {e}></CardDiv>

    })}
</Grid>
    </Box>
  );
};

export default CatagaryPage;
