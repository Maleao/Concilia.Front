import React, { useState } from "react";
import "./styles/App.css";
import { Container, Paper, Box, Grid, TextField, IconButton, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GridComponent from "./Components/GridComponent.js";
import TeamButtons from "./Components/TeamButtons.js";
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import FileUploadButton from "./Components/FileUploadButton.js";

/****************************************STYLE*************************************************/
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.grey[200],
    paddingTop: theme.spacing(5),
  },
  inputGroup: {
    marginBottom: theme.spacing(3),
  },
  pageTitle: {
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(3), 
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#0066cc',
    textAlign: 'center',
  },
}));
/********************************************************************************************/

/*****************************************FUNCTIONS********************************************/
function App() {
  const classes = useStyles();
  const layoutTemplate = { name: "", pinicial: "", pfinal: "", size: "" };
  const [layouts, setLayout] = useState([layoutTemplate,]);
  const [showAlert, setShowAlert] = useState(true);

 const addRows = (isDateField) => {
  const newField = isDateField ? { date: new Date() } : layoutTemplate;
  setLayout([...layouts, newField]);
};

  // Função para validar entrada numérica
  const handleNumericInput = (e) => {
    const value = e.target.value;
    // Substituir não números por uma string vazia
    const numericValue = value.replace(/\D/g, '');
    // Atualizar o valor no campo
    e.target.value = numericValue;
  };

  // Atualiza campo na array
  const changeField = (e, index) => {
    const updatedField = layouts.map((field, i) => index === i ?
      { ...field, [e.target.name]: e.target.value } : field);
    setLayout(updatedField);
  };

  // Função para ser usada nos campos de entrada
  const onChange = (e, index) => {
    // Chamando ambas as funções
    handleNumericInput(e);
    changeField(e, index);
  };

  const removeField = (index) => { 
    const filteredFields = [...layouts];
    filteredFields.splice(index, 1);
    setLayout(filteredFields)
  }

  const handleFileUpload = (files) => {
    // Parte para enviar para o servidor os arquivos
    console.log('Arquivos:', files);
  }

/********************************************************************************************/

  return (
    <Container className={classes.root}>
      <Paper component={Box} p={4}>

      {showAlert && (
          <Alert severity="warning" onClose={() => setShowAlert(false)}>
            <AlertTitle>Atenção</AlertTitle>
            O gerador de Layout segue uma sequência, favor gerar os campos em conformidade com a 
            documentação da Operadora
          </Alert>
        )}

        <Typography variant="h4" className={classes.pageTitle}>
          Gerador de Layout
        </Typography>

        {layouts.map((layout, index) => (
          <GridComponent
            key={index}
            layout={layout}
            index={index}
            changeField={changeField}
            onChange={onChange}
            removeField={removeField}
          />
        ))}

        <TeamButtons addRows={addRows} />
        <FileUploadButton onFileUpload={handleFileUpload} />


      </Paper>
    </Container>
  );
}

export default App;
