import React from "react";
import Container from "@mui/material/Container";
import { Box, Grid, Link, Typography } from "@mui/material";
import "../../../assets/styles/Politicas/14001/14001Styles.scss";
import poster1 from "../../../assets/img/Politicas/Ambiental.jpg";
import Image from "../../../assets/img/Home/Nosotros/Nosotros03.jpg";
import CircleIcon from "@mui/icons-material/FiberManualRecord";
const Politica14001 = () => {
  return (
    <Box
      style={{
        position: "relative",
        marginTop: "-20px",
        zIndex: "1",
        paddingBottom: "20px",
      }}
    >
      <Box className="PoliticasPortada">
        <img src={poster1} alt="" />
      </Box>
      <Box style={{ padding: "82px 30px" }}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box className="PoliticasInformacion">
              <Box textAlign="center">
                <Typography className="TittlePolitica14001">
                  Politica de Ambiental
                </Typography>
              </Box>
              <Box>
                <Box>
                  <Typography className="TextPolitica14001Part1">
                    Somos una empresa de Transporte de carga general por
                    carretera, presentes en la industria y minería; contamos con
                    certificaciones internacionales y profesionales
                    comprometidos con la mejora continua en nuestros procesos
                  </Typography>
                </Box>
                <Box>
                  <Typography className="TextPolitica14001Part2">
                    Siendo conscientes de nuestra responsabilidad, nos
                    comprometemos a:
                  </Typography>
                </Box>
                <Box style={{ marginBottom: "20px" }}>
                  <Box display="flex">
                    <Box>
                      <CircleIcon
                        style={{ fontSize: "small", marginRight: "10px" }}
                      />
                    </Box>
                    <Typography className="TextPolitica14001Part3">
                      Fomentar una cultura de protección al medio ambiente
                      previniendo la contaminación y mitigación de impactos
                      negativos en nuestros procesos
                    </Typography>
                  </Box>
                  <Box display="flex">
                    <Box>
                      <CircleIcon
                        style={{ fontSize: "small", marginRight: "10px" }}
                      />
                    </Box>
                    <Typography className="TextPolitica14001">
                      Ser gestores del uso adecuado de los recursos naturales
                      en nuestras actividades
                    </Typography>
                  </Box>
                  <Box display="flex">
                    <Box>
                      <CircleIcon
                        style={{ fontSize: "small", marginRight: "10px" }}
                      />
                    </Box>
                    <Typography className="TextPolitica14001">
                      Cumplir los requisitos legales ambientales y otros
                      aplicables
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography className="TextPolitica9001">
                    Revisar y mejorar continuamente el sistema de gestión
                    ambiental.
                  </Typography>
                </Box>
                <Box>
                  <Typography>V.00</Typography>
                  <Typography>17/12/2021</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Politica14001;
