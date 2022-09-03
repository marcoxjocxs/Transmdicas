
import { Box } from '@mui/material';
import React from 'react';
import Politica45001 from '../../../components/Politicas/Politica45001/Politica45001';
import Header from '../../../components/sections/header/header';





export default function PoliticaCalidad45001() {
  const [isActivate, setIsActivate] = React.useState(true);
  const comando = window.location.pathname;

  React.useEffect(() => {
    if (comando !== "/") {
      setIsActivate(false)
    }
  }, [comando])

  return (
    <>
      <Header/>
      <Box style={{ paddingTop: isActivate ? "0" : "150px" }}>
        <Politica45001 />
      </Box>
    </>

  );
}