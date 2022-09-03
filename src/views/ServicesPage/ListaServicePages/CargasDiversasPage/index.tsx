
import { Box } from '@mui/material';
import React from 'react';
import CargasDiversas from '../../../../components/ListaServiciosTransmdicas/ServicioCargasDiversas/CargasDiversas';
import Header from '../../../../components/sections/header/header';




export default function CargasDiversasPage() {

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
        <CargasDiversas />
      </Box>
    </>

  );
}