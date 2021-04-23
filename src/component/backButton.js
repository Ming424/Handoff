import { Button } from "@material-ui/core";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import React from 'react';
import { useHistory } from "react-router-dom";

// BACK BUTTOM COMPONENT
export default function BackButton() {

  const history = useHistory();
  const goBack = () => { history.goBack() }

  return (
    <Button style={backButtonStyle} 
      variant="outlined"  
      color="primary" 
      component="span"
      onClick={goBack}>
        <ChevronLeftIcon /> Back
    </Button>
  );
}

const backButtonStyle = {
    marginBottom: '15px',
    marginTop: '0px'
};
