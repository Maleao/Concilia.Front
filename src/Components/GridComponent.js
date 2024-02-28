import React, { useState } from "react";
import { Grid, TextField, IconButton, MenuItem } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const GridComponent = ({ layout, index, changeField, onChange, removeField }) => {
  const [dateFormat, setDateFormat] = useState('dd/MM/yyyy');


  const handleDateFormatChange = (event) => {
    setDateFormat(event.target.value);
  }

  // Lista de formatos de data
  const dateFormats = [
    { label: 'dd/MM/yyyy', value: 'dd/MM/yyyy' },
    { label: 'MM/dd/yyyy', value: 'MM/dd/yyyy' },
    { label: 'yyyy/MM/dd', value: 'yyyy/MM/dd' },
    { label: 'dd-MM-yyyy', value: 'dd-MM-yyyy' },
    { label: 'MM-dd-yyyy', value: 'MM-dd-yyyy' },
    { label: 'yyyy-MM-dd', value: 'yyyy-MM-dd' },
    { label: 'dd.MM.yyyy', value: 'dd.MM.yyyy' },
    { label: 'MM.dd.yyyy', value: 'MM.dd.yyyy' },
    { label: 'yyyy.MM.dd', value: 'yyyy.MM.dd' },
  ];

  return (
  <Grid container spacing={3} key={index}>
    {layout.date ? (
      <Grid item xs={12} md={3}>
        <TextField
          select
          label="Formato da Data"
          variant="outlined"
          fullWidth
          value={dateFormat}
          onChange={handleDateFormatChange}
        >

      {dateFormats.map((format, index) => (
            <MenuItem key={index} value={format.value}>
              {format.label}
            </MenuItem>
          ))}

    </TextField>    
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
  )
};

export default GridComponent;