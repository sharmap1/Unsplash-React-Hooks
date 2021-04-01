import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
}));


export const UnsplashImage = ({ images }) => {
    const classes = useStyles();
  return (
    <>
  <Grid container spacing={1}>
     
               {images.map(image => (
         <Grid item xs={6} sm={4} md={2} className={classes.grid}>

          <div key={image.id}>
            <img src={image.urls.full} alt="unsplashImg" style={{height:"200px", width: "100%"}}/>
          </div>
        </Grid>
               ))}
        </Grid>


    </>
  )
}
