import React from "react";
import Container from "@mui/material/Container";
import {  Link, Typography, Grid } from "@mui/material";
import "../../assets/styles/ValoresNosotros/ValoresStyles.scss";
import ResponsabilidadIcon from "../../assets/img/otros/responsabilidadIcon.png";
import icon2 from "../../assets/img/Home/Nosotros/icon2.png";
import icon3 from "../../assets/img/Home/Nosotros/icon3.png";
import icon4 from "../../assets/img/Home/Nosotros/icon4.png";
import Box from "@mui/material/Box";
const Valores = () => {
  return (
    <Container style={{ paddingBottom: "50px", paddingTop: "50px" }}>
      <Box textAlign="center" paddingBottom="3%">
        <Typography className="TittleValores">Nuestros Valores</Typography>
      </Box>
      <Box>
        <Box>

        </Box>
        <Grid container  spacing={4} justifyContent="space-between" >
          <Grid item md={2} xs={6}>
            
            <Box
              style={{ border: "1px solid" }}
              className="contenedorCardValores"
            >
              <Box className="IconValores">
                <img
                  src={ResponsabilidadIcon}
                  width="50px"
                />
              </Box>
              <Box className="textIconValores">
                <Typography className="caracteristicastextIconValores">
                  Responsabilidad
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={2} xs={6}>
            <Box
              style={{ border: "1px solid" }}
              className="contenedorCardValores"
            >
              <Box className="IconValores">
                <img
                  src={ResponsabilidadIcon}
                  width="50px"
                />
              </Box>
              <Box className="textIconValores">
                <Typography className="caracteristicastextIconValores">
                  Seguridad
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={2} xs={6}>
            <Box
              style={{ border: "1px solid" }}
              className="contenedorCardValores"
            >
              <Box className="IconValores">
                <img
                  src={ResponsabilidadIcon}
                  width="50px"
                />
              </Box>
              <Box className="textIconValores">
                <Typography className="caracteristicastextIconValores">
                  Integridad
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={2} xs={6}>
            <Box
              style={{ border: "1px solid" }}
              className="contenedorCardValores"
            >
              <Box className="IconValores">
                <img
                  src={ResponsabilidadIcon}
                  width="50px"
                />
              </Box>
              <Box className="textIconValores">
                <Typography className="caracteristicastextIconValores">
                  Trabajamos juntos
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={2} xs={6}>
            <Box
              style={{ border: "1px solid" }}
              className="contenedorCardValores"
            >
              <Box className="IconValores">
                <img
                  src={ResponsabilidadIcon}
                  width="50px"
                />
              </Box>
              <Box className="textIconValores">
                <Typography className="caracteristicastextIconValores">
                  Queremos ser Mejores
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Valores;
