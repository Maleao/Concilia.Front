import React, { useState } from "react";
import "./styles/App.css";
import { Container, Paper, Box, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GridComponent from "./Components/GridComponent.js";
import TeamButtons from "./Components/TeamButtons.js";
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import FileUploadButton from "./Components/FileUploadButton.js";
import AbaUpdate from "./Components/AbaUpdate.js";


/*==================STYLE==========================*/
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.grey[200],
    paddingTop: theme.spacing(5),
  },
  inputGroup: {
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3)
  },
  pageTitle: {
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(3), 
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#0066cc',
    textAlign: 'center',
  },
  tabButton: {
    marginBottom: theme.spacing(4),
  },
}));
/*=====================STYLE-END=============================*/


/*======================CHAMADA APP=========================*/
function App() {
  const classes = useStyles();
  const [showAlert, setShowAlert] = useState(true);
  const [mostrarNovaAba, setMostrarNovaAba] = useState(false);
  const layoutTemplate = { name: "", pinicial: "", pfinal: "", size: "" };
  const [layouts, setLayout] = useState([layoutTemplate,]);
  const [buttonUpdate, setButtonUpdate] = useState(false)


  const addRows = (isDateField) => {
    const newField = isDateField ? { date: new Date() } : layoutTemplate;
    setLayout([...layouts, newField]);
  };

  const handleNumericInput = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/\D/g, '');
    e.target.value = numericValue;
  };

  const changeField = (e, index) => {
    const updatedField = layouts.map((field, i) => index === i ?
      { ...field, [e.target.name]: e.target.value } : field);
    setLayout(updatedField);
  };

  const onChange = (e, index) => {
    handleNumericInput(e);
    changeField(e, index);
  };

  const removeField = (index) => { 
    const filteredFields = [...layouts];
    filteredFields.splice(index, 1);
    setLayout(filteredFields)
  }

  const atualizarButton = () => {
    setButtonUpdate((prevState) => !prevState)
  }




/*==================CHAMADA ABA UPDATE==========================*/
  // Função para alternar entre a aba existente e a nova aba
  const alternarAba = () => {
    setMostrarNovaAba((prevState) => !prevState);
  };

  const onClick = () => { 
    atualizarButton()
    alternarAba();
  }

  return (
    <Container className={classes.root}>
      <Paper component={Box} p={4}>
        {showAlert && (
          <Alert severity="warning" onClose={() => setShowAlert(false)}>
            <AlertTitle>Atenção</AlertTitle>
            Favor gerar os campos em conformidade com a 
            documentação da Operadora
          </Alert>
        )}

        <Typography variant="h4" className={classes.pageTitle}>
          Gerador de Layout
        </Typography>

        <Button classes={classes.marginButton}
        variant="contained" 
          color="default"
          className={classes.tabButton}
          onClick={onClick}
        >
        {mostrarNovaAba ? 'Voltar Para Criação' : 'Atualizar layout'}
        </Button>
          
        {mostrarNovaAba ? layouts.map((layout, index) => (<AbaUpdate
               key={index}
               layout={layout}
               index={index}
               changeField={changeField}
               onChange={onChange}
               removeField={removeField}
               addRows={addRows}
               buttonUpdate={buttonUpdate}
               /> 
        ))
          : <AbaPrincipal /> }
          {mostrarNovaAba ? <TeamButtons addRows={addRows} buttonUpdate={buttonUpdate} /> :  null}
      </Paper>
    </Container>
  );
}
/*==========================FIM CHAMADA UPDATE===============================*/



/*==================ABA PRINCIPAL==========================*/
// Componente para a aba existente
const AbaPrincipal = ({}) => {
  const layoutTemplate = { name: "", pinicial: "", pfinal: "", size: "" };
  const [layouts, setLayout] = useState([layoutTemplate,]);
  const [buttonUpdate] = useState(false)

  

  const addRows = (isDateField) => {
    const newField = isDateField ? { date: new Date() } : layoutTemplate;
    setLayout([...layouts, newField]);
  };

  const handleNumericInput = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/\D/g, '');
    e.target.value = numericValue;
  };

  const changeField = (e, index) => {
    const updatedField = layouts.map((field, i) => index === i ?
      { ...field, [e.target.name]: e.target.value } : field);
    setLayout(updatedField);
  };

  const onChange = (e, index) => {
    handleNumericInput(e);
    changeField(e, index);
  };

  const removeField = (index) => { 
    const filteredFields = [...layouts];
    filteredFields.splice(index, 1);
    setLayout(filteredFields)
  }

  const handleFileUpload = (files) => {
    console.log('Arquivos:', files);
  }


  return (
    <>
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
      <FileUploadButton onFileUpload={handleFileUpload}  />
      <TeamButtons addRows={addRows} buttonUpdate={buttonUpdate}/>
    </>
   )
}
/*==========================FIM CHAMADA ABA PRINCIPAL===============================*/
export default App;
/*==========================FIM CHAMADA APP===============================*/