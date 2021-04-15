import React from 'react';
import { useHistory } from "react-router-dom";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Button } from "@material-ui/core";

// import BackButtom from '../component/backButtom';
// <BackButtom />

export default function BackButtom() {

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
