import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    dropzoneStyles: {
        border: '2px dashed #cccccc',
        borderRadius: '4px',
        padding: '20px',
        textAlign: 'center',
        cursor: 'pointer',
        marginTop: theme.spacing(3),
    },
  }));

function FileUploadButton({ onFileUpload }) {
  const classes = useStyles();

  const onDrop = useCallback((acceptedFiles) => {
    // Aqui podemos processar os arquivos para enviar ao servidor
    // No momento, este exemplo simplesmente chama a função onFileUpload com os arquivos
    onFileUpload(acceptedFiles);
  }, [onFileUpload]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '.csv', // Aceitar apenas arquivos CSV
  });

  return (
    <div {...getRootProps()} className={classes.dropzoneStyles}>
      <input {...getInputProps()} />
      <p>Arraste e solte um arquivo CSV aqui, ou clique para selecionar.</p>
    </div>
  );
}


export default FileUploadButton;