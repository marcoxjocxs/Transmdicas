
import { Box } from '@mui/material';
import React from 'react';
import CardCerti from '../../components/CardsCertificaciones/CardCertificacion';
import MissionVision from '../../components/MisionyVision-Home/MisionVisionHome';
import Nosotros from '../../components/Nosotros/Nosotros';
import Equipo from '../../components/NuestroEquipo/NuestroEquipoNosotros';
import Header from '../../components/sections/header/header';
import Valores from '../../components/ValoresNosotros/valores';

export default function NosotrosPage() {
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
        <Nosotros />
        <MissionVision />
        <Valores />
        <Equipo />
      </Box>
    </>

  );
}