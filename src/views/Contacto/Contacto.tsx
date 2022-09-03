
import { Box } from '@mui/material';
import React from 'react';
import Contact from '../../components/Contact/Contact';
import Header from '../../components/sections/header/header';
import ServiciosVista from '../../components/Servicios/Servicios';

export default function ContactoPage() {
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
        <Contact/>
      </Box>
      </>
      
    );
  }