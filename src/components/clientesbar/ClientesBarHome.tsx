import React from "react";
import Container from "@mui/material/Container";
import { Box, Grid, Link, Typography } from "@mui/material";
import "../../assets/styles/Home/Clientes/ClientesStyles.scss";
import logoSgs from "../../assets/img/Logos/sgs.png";
import logoukas from "../../assets/img/Logos/ukas.png";
import logorepsol from "../../assets/img/Logos/Repsol.png";
import logoyura from "../../assets/img/Logos/yura-logo.png";
const ClientesBar = () => {
  return (
    <Box>
      <Box textAlign="center">
        <Typography className="titleClientes">Nuestros Clientes</Typography>
      </Box>
      <Box
        style={{
          background: "#d3d3d36e",
          marginBottom: "8%",
          padding: "30px 0",
        }}
      >
        <Container>
          <Grid container spacing={3} justifyContent="center">
            <Grid item md={6} xs={10} sm={8}>
              <Box className="ContenedorImgClientes" >
                
                <img src={logorepsol} className="imgUkas" alt="" />
                <img src={logoyura} className="imgUkas" alt="" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default ClientesBar;
