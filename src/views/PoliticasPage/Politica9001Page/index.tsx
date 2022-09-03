
import { Box } from '@mui/material';
import React from 'react';
import Politica9001 from '../../../components/Politicas/Politica9001/Politica9001';
import Header from '../../../components/sections/header/header';

export default function PoliticaCalidad9001() {
  const [isActivate, setIsActivate] = React.useState(true);
  const comando =window.location.pathname;

  React.useEffect(() => {
    if (comando !== "/") {
      setIsActivate(false)
    }
  },[comando])

    return (
      <>
      <Header/>
      <Box style={{paddingTop: isActivate?"0" : "150px" }}>
        <Politica9001/>
      </Box>
      </>
      
    );
  }