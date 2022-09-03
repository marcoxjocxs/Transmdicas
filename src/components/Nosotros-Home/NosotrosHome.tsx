import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "../../assets/img/Nosotros/SobreNosotros1.jpg";
import icon1 from "../../assets/img/Home/Nosotros/icon1.png";
import icon2 from "../../assets/img/Home/Nosotros/icon2.png";
import icon3 from "../../assets/img/Iconos/cemento.png";
import icon5 from "../../assets/img/Iconos/hidrocarburos.png";
import icon4 from "../../assets/img/Home/Nosotros/icon4.png";
import Grid from "@mui/material/Grid";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import "../../assets/styles/Home/Nosotros/NosotrosHomeStyle.scss";
import { Box } from "@mui/material";
import MissionVision from "../../components/MisionyVision-Home/MisionVisionHome";
const NosotrosHome = () => {
  return (
    <Container

      style={{ paddingTop: "100px", paddingBottom: "50px" }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={12} md={4}>
          <div className="imagenNosotrosHome">
            <img src={Image} className="imgNosotrosHome" />
          </div>
        </Grid>
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
                 la cual cuenta con amplia trayectoria en el transporte de materiales peligrosos 
                 y carga en general, iniciando sus actividades en el año 2002, desde entonces el 
                 crecimiento ha sido exponencial posicionándose en el mercado con una flota de unidades realizando el transporte para diferentes unidades mineras e industrias.
                Buscamos lograr la excelencia en el servicio de transporte orientando esfuerzos a lograr satisfacer los requisitos de nuestros clientes cumpliendo nuestros estándares de calidad, medio ambiente, seguridad y salud en el trabajo y seguridad vial.
                Contamos con un equipo multidisciplinario de profesionales con amplia experiencia en el servicio ofreciendo soluciones confiables, oportunas y eficientes.

              </Typography>
              <Typography>

              </Typography>
            </Box>
            <Box>
              <Grid container spacing={4} justifyContent="center">
                <Grid item xs={6} md={3} lg={3}>
                  <Box className="cardNosotros">
                    <Box className="IconNosotros">
                      <img src={icon1} width="100%" />
                    </Box>
                    <Box className="textIconNosotros">
                      <Typography className="caracteristicastextIcon">
                        Transporte de Cargas Diversas
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={6} md={3} lg={3}>
                  <Box className="cardNosotros">
                    <Box className="IconNosotros" style={{paddingTop:"17px", paddingBottom:"4gitpx"}}>
                      <img src={icon5} width="100%" />
                    </Box>
                    <Box className="textIconNosotros">
                      <Typography className="caracteristicastextIcon">
                        Transporte de Hidrocarburos
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={6} md={3} lg={3}>
                  <Box className="cardNosotros">
                    <Box className="IconNosotros">
                      <img src={icon3} width="100%" />
                    </Box>
                    <Box className="textIconNosotros">
                      <Typography className="caracteristicastextIcon">
                        Transporte de Cemento
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={6} md={3} lg={3}>
                  <Box className="cardNosotros">
                    <Box className="IconNosotros">
                      <img src={icon4} width="100%" />
                    </Box>
                    <Box className="textIconNosotros">
                      <Typography className="caracteristicastextIcon">
                        Transporte de GLP
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NosotrosHome;
