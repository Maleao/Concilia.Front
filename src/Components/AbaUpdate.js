import React, { useState, useEffect } from "react";
import { Grid, TextField, IconButton, MenuItem } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";


const AbaUpdate = ({ layout, index, changeField, onChange, removeField, addRows }) => {
  const [dateFormat, setDateFormat] = useState('dd/MM/yyyy');
  const [dados, setDados] = useState({
    nome: "",
    pontoInicial: "",
    pontoFinal: "",
    tamanho: ""
  });
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    /* Aqui você pode fazer uma chamada para o backend para obter os dados e atualizar o estado
     Por exemplo:
     fetchDadosDoBackEnd().then((response) => setDados(response));
     Isso é apenas um exemplo. Certifique-se de implementar de acordo com sua lógica de backend. */
  }, []);
  
  const handleEdit = () => {
    setEditMode(!editMode);
  };
  
  const handleChange = (event, field) => {
    setDados({
      ...dados,
      [field]: event.target.value
    });
  };

  const handleSave = () => {
    // Implemente a lógica para salvar os dados editados
    console.log("Dados salvos:", dados);
    setEditMode(false);
  };

  const handleDateFormatChange = (event) => {
    setDateFormat(event.target.value);
  };


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
      {layout && layout.date ? (
        <Grid item xs={12} md={3}>
          <TextField
            select
            label="Formato da Data"
            variant="outlined"
            fullWidth
            value={dateFormat}
            onChange={handleDateFormatChange}
            disabled={!editMode}
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
              disabled={!editMode}
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
              disabled={!editMode}
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
              disabled={!editMode}
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
              disabled={!editMode}
            />
          </Grid>
        </>
      )}
      
      <Grid item xs={10} sm={3} md={1}>
        {editMode ? (
          <IconButton color="primary" onClick={handleSave}>
            <SaveIcon />
          </IconButton>
        ) : (
          <IconButton color="primary" onClick={handleEdit}>
            <EditIcon />
          </IconButton>
        )}
      </Grid>

      <Grid item xs={12} sm={6} md={1}>
        <IconButton color="secondary" onClick={() => removeField(index)}>
          <DeleteOutlineIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default AbaUpdate;
