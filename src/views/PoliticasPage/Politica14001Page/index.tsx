
import { Box } from '@mui/material';
import React from 'react';
import Politica14001 from '../../../components/Politicas/Politica14001/Politica14001';
import Header from '../../../components/sections/header/header';





export default function Politica14001Page() {
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
        <Politica14001 />
      </Box>
    </>
  );
}