
import { Box } from '@mui/material';
import React from 'react';
import Politica39001 from '../../../components/Politicas/Politica39001/Politica39001';
import Header from '../../../components/sections/header/header';

export default function Politica39001Page() {
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
        <Politica39001/>
      </Box>
      </>
      
    );
  }