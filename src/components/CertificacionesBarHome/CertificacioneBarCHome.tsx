import React from "react";
import Container from "@mui/material/Container";
import { Box, Grid, Link, Typography } from "@mui/material";
import "../../assets/styles/Home/Certificados/CertificadosStyles.scss";
import logoSgs from "../../assets/img/Logos/sgs.png";
import logoukas from "../../assets/img/Logos/ukas.png";
const CertiBar = () => {
  return (
    <Box style={{background:"#d3d3d36e", marginBottom:"8%", padding:"30px 0"}}>
      <Container >
        <Grid container spacing={3} justifyContent="center">
          <Grid item md={5} xs={10} sm={8} className="containerMision">
            <Box className="contenedor1">
              <Typography className="textCertificado">
                Estamos certificados por los organismos mas reconocidos
              </Typography>
            </Box>
          </Grid>
          <Grid item md={5} xs={10} sm={8}>
            <Box className="contenedor1CertificadosHome">
              <img src={logoSgs} alt="" />
              <img className="imgUkas" src={logoukas} alt="" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CertiBar;
