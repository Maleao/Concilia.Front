import React from "react";
import { Grid, TextField, IconButton } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const GridComponent = ({ layout, index, changeField, onChange, removeField }) => (
  <Grid container spacing={3} key={index}>
    {layout.date ? (
      <Grid item xs={12} md={3}>
        <TextField
          label="Data"
          variant="outlined"
          fullWidth
          disabled
          value={layout.date.toLocaleDateString()}
        />
      </Grid>
    ) : (
      <>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Nome"
            placeholder="Nome"
            variant="outlined"
            fullWidth
            name="name"
            onChange={(e) => changeField(e, index)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <TextField
            label="Ponto Inicial"
            placeholder="Ponto Inicial"
            variant="outlined"
            fullWidth
            name="pinicial"
            onChange={(e) => onChange(e, index)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <TextField
            label="Ponto Final"
            placeholder="Ponto Final"
            variant="outlined"
            fullWidth
            name="pfinal"
            onChange={(e) => onChange(e, index)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <TextField
            label="Tamanho"
            placeholder="Tamanho"
            variant="outlined"
            fullWidth
            name="size"
            onChange={(e) => onChange(e, index)}
          />
        </Grid>
      </>
    )}

    <Grid item xs={12} sm={6} md={1}>
      <IconButton color="secondary" onClick={() => removeField(index)}>
        <DeleteOutlineIcon />
      </IconButton>
    </Grid>
  </Grid>
);

export default GridComponent;