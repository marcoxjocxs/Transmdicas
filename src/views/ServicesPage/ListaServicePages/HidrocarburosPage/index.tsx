
import React from 'react';
import Hidrocarburos from '../../../../components/ListaServiciosTransmdicas/ServicioHidrocarburos/Hidrocarburos';

import { Box } from '@mui/material';
import Header from '../../../../components/sections/header/header';


export default function HidrocarburosPage() {
  const [isActivate, setIsActivate] = React.useState(true);
  const comando =window.location.pathname;

  React.useEffect(() => {
    if (comando !== "/") {
      setIsActivate(false)
    }
  },[comando])

    return (
      <>
      <Header />
      <Box style={{paddingTop: isActivate?"0" : "150px" }}>
        <Hidrocarburos/>
      </Box></>
      
    );
  }