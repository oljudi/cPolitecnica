import React from "react";
import HomeImage from "../../components/HomeImage";
import HomeImage2 from "../../components/HomeImage2";
import { Grid } from "@material-ui/core";
import Presenter from "../../components/Presenter";
import PostCarousel from "../../components/PostCarousel";
import ListEvents from "../../components/ListEvents";

function Home() {
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <HomeImage />
        </Grid>
        <Grid item xs={4}>
          <Presenter />
        </Grid>
        <Grid item xs={4}>
          <HomeImage2 />
        </Grid>
      </Grid>
      <br />
      <Grid container>
        <Grid item xs={10}>
          <PostCarousel />
        </Grid>
        <Grid item xs={2}>
          <ListEvents/>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
