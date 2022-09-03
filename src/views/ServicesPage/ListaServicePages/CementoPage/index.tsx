
import React from 'react';
import Cemento from '../../../../components/ListaServiciosTransmdicas/ServicioCemento/ServicioCemento';

import { Box } from '@mui/material';
import Header from '../../../../components/sections/header/header';


export default function CementoPage() {
  const [isActivate, setIsActivate] = React.useState(true);
  const comando = window.location.pathname;

  React.useEffect(() => {
    if (comando !== "/") {
      setIsActivate(false)
    }
  }, [comando])

  return (
    <>
      <Header />
      <Box style={{ paddingTop: isActivate ? "0" : "150px" }}>
        <Cemento />
      </Box>
    </>

  );
}