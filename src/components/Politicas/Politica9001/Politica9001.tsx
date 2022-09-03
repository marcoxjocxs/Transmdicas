import React from "react";
import Container from "@mui/material/Container";
import { Box, Grid, Link, Typography } from "@mui/material";
import "../../../assets/styles/Politicas/9001/9001Styles.scss";
import poster1 from "../../../assets/img/Politicas/calidad1.jpg";
import Image from "../../../assets/img/Home/Nosotros/Nosotros03.jpg";
import CircleIcon from "@mui/icons-material/FiberManualRecord";

const Politica9001 = () => {
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
                <Typography className="TittlePolitica9001">
                  Politica de Calidad
                </Typography>
              </Box>
              <Box>
                <Box>
                  <Typography className="TextPolitica9001Part1">
                    Somos una empresa de Transporte de carga general por
                    carretera, presentes en la industria y minería; contamos con
                    certificaciones internacionales y profesionales
                    comprometidos con la mejora continua en nuestros procesos.
                  </Typography>
                </Box>
                <Box>
                  <Typography className="TextPolitica9001Part2">
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
                    <Typography className="TextPolitica9001Part3">
                      Promover una cultura de mejora continua con participación,
                      involucramiento, motivación y capacitación de nuestros
                      colaboradores hacia el logro de la excelencia en nuestros
                      servicios.
                    </Typography>
                  </Box>
                  <Box display="flex">
                    <Box>
                      <CircleIcon
                        style={{ fontSize: "small", marginRight: "10px" }}
                      />
                    </Box>
                    <Typography className="TextPolitica9001">
                      Brindar el servicio con flota vehicular en óptimas
                      condiciones según estándares de nuestros clientes.
                    </Typography>
                  </Box>
                  <Box display="flex">
                    <Box>
                      <CircleIcon
                        style={{ fontSize: "small", marginRight: "10px" }}
                      />
                    </Box>
                    <Typography className="TextPolitica9001">
                      Cumplir los requisitos legales y otros aplicables a
                      nuestras actividades.
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography className="TextPolitica9001">
                    Revisar y mejorar continuamente el sistema de gestión de
                    calidad.
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

export default Politica9001;
