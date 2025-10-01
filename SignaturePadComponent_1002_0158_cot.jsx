// 代码生成时间: 2025-10-02 01:58:27
import React, { useState } from 'react';
import PropTypes from 'prop-types'; // For prop types
import { makeStyles } from '@material-ui/core/styles'; // For styling
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import ContentCopyIcon from '@material-ui/icons/ContentCopy';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import SignaturePad from 'react-signature-canvas'; // Third-party library for signature

// Define prop types for the component
SignaturePadComponent.propTypes = {
  onSignatureClear: PropTypes.func.isRequired,
  onSignatureSave: PropTypes.func.isRequired,
  onSignatureChange: PropTypes.func.isRequired,
  onSignatureLoad: PropTypes.func,
};

// Define default props for the component
SignaturePadComponent.defaultProps = {
  onSignatureLoad: () => {},
};

// Hook to manage the state of the signature pad
const useSignaturePad = () => {
  const [signature, setSignature] = useState(null);
  const [isEmpty, setIsEmpty] = useState(true);

  const clearSignature = () => {
    setSignature(null);
    setIsEmpty(true);
  };

  const saveSignature = () => {
    if (!isEmpty) {
      console.log('Signature:', signature);
      // Here you can implement your saving functionality
    }
  };

  const changeSignature = (newSignature) => {
    setSignature(newSignature);
    setIsEmpty(false);
  };

  return {
    signature,
    isEmpty,
    clearSignature,
    saveSignature,
    changeSignature,
  };
};

// The functional component
const SignaturePadComponent = ({ onSignatureClear, onSignatureSave, onSignatureChange, onSignatureLoad }) => {
  const classes = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing(2),
    },
    actions: {
      marginTop: theme.spacing(2),
    },
  }))();

  const {
    signature,
    isEmpty,
    clearSignature,
    saveSignature,
    changeSignature,
  } = useSignaturePad();

  return (
    <div className={classes.root}>
      <SignaturePad
        className={classes.signaturePad}
        canvasProps={{ width: 700, height: 300 }}
        onEnd={() => onSignatureChange(signature)}
        onChange={(newSignature) => changeSignature(newSignature)}
      />
      <div className={classes.actions}>
        <IconButton onClick={() => clearSignature()} aria-label='clear'>
          <CloseIcon />
        </IconButton>
        <IconButton onClick={() => saveSignature()} aria-label='save'>
          <SaveIcon />
        </IconButton>
        <IconButton onClick={() => onSignatureLoad(signature)} aria-label='load'>
          <ContentCopyIcon />
        </IconButton>
        <IconButton onClick={() => clearSignature()} aria-label='exit'>
          <HighlightOffIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default SignaturePadComponent;