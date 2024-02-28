import React from "react";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  addFieldButton: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(3),
  },
}));

function TeamButtons({ addRows }) {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.addFieldButton}>
      <Grid item xs={12} md={3}>
        <Button variant="contained" color="primary" onClick={() => addRows(false)}>
          Adicionar Campo
        </Button>
      </Grid>
      <Grid item xs={12} md={3}>
        <Button variant="contained" color="primary" onClick={() => addRows(true)}>
          Campo de Data
        </Button>
      </Grid>
      <Grid item xs={12} md={3} container justify="flex-end">
        <Button variant="contained" color="primary">
          Criar Layout
        </Button>
      </Grid>
    </Grid>
  );
}

export default TeamButtons;