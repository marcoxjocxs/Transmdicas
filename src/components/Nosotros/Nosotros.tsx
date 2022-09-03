import React from "react";
import Container from "@mui/material/Container";
import { Box, Grid, Link, Typography } from "@mui/material";
import img15 from "../../assets/img/Galeria/15.jpg";
import Image1 from "../../assets/img/otros/camionprueba.jpg";
const Nosotros = () => {
  return (
    <Box  style={{ paddingBottom: "50px" }}>
      <Container
        maxWidth="md"
      >
        <Grid
          container
          spacing={4}
          justifyContent="space-between"
          alignItems="center"
        >

          <Grid item xs={12} md={6}>
            <Box>
              <Box className="textNosotros">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="negrita"
                >
                  Sobre Nosotros
                </Typography>
                <Typography variant="body2" style={{ marginBottom: "15px" }}>
                  TRANSMDICAS S.R.L. es una de las principales empresas que conforman el GRUPO PEZO,
                  la cual cuenta con amplia trayectoria en el transporte de materiales peligrosos y
                  carga en general, iniciando sus actividades en el año 2002, desde entonces el crecimient
                  ha sido exponencial posicionándose en el mercado con una flota de unidades
                  realizando el transporte para diferentes unidades mineras e industrias.
                </Typography>
                <Typography variant="body2">
                  Buscamos lograr la excelencia en el servicio de transporte orientando esfuerzos a
                  lograr satisfacer los requisitos de nuestros clientes cumpliendo nuestros
                  estándares de calidad, medio ambiente, seguridad y salud en el trabajo y seguridad vial.
                </Typography>
                <Typography variant="body2">
                  Contamos con un equipo multidisciplinario de profesionales con amplia
                  experiencia en el servicio ofreciendo soluciones confiables, oportunas y eficientes.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <div className="imagenNosotrosHome">
              <img src={img15} className="imgNosotrosHome" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>

  );
};

export default Nosotros;
