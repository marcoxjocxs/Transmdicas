import React from "react";
import Container from "@mui/material/Container";
import { Box, Grid, Link, Typography } from "@mui/material";
import "../../../assets/styles/Politicas/45001/45001Styles.scss";
import poster1 from "../../../assets/img/Politicas/seguridad.jpg";
import Image from "../../../assets/img/Home/Nosotros/Nosotros03.jpg";
const Politica45001 = () => {
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
      <Box className="Container45001">
        <Grid container  spacing={3} justifyContent="flex-end">
          <Grid item xs={12} md={6}>

            <Box className="PoliticasInformacion">
              <Box textAlign="center">
                <Typography className="TittlePolitica45001">
                  Politica de Seguridad y salud en el trabajo
                </Typography>
              </Box>
              <Box>
                <Box>
                  <Typography className="TextPolitica45001">
                    Somos una empresa de Transporte de carga general por
                    carretera, presentes en la industria y minería; contamos con
                    certificaciones internacionales y profesionales comprometidos
                    con la mejora continua en nuestros procesos.
                  </Typography>
                </Box>
                <Box>
                  <Typography className="TextPolitica45001">
                    Siendo conscientes de nuestra responsabilidad, nos
                    comprometemos a:
                  </Typography>
                </Box>
                <Box>
                  <Box>
                    <Box></Box>
                    <Typography className="TextPolitica45001">
                      Brindar un ambiente de trabajo seguro y saludable para el
                      óptimo desenvolvimiento de nuestros colaboradores con la
                      finalidad de prevenir accidentes, incidentes y enfermedades
                      profesionales relacionados con nuestras actividades
                    </Typography>
                  </Box>
                  <Box>
                    <Box></Box>
                    <Typography className="TextPolitica45001">
                      Promover en nuestros colaboradores una cultura preventiva de
                      seguridad basada en el comportamiento a fin de eliminar los
                      peligros y reducir los riesgos asociados a nuestros
                      procesos.
                    </Typography>
                  </Box>
                  <Box>
                    <Box></Box>
                    <Typography className="TextPolitica45001">
                      Garantizar la participación y consulta activa de nuestros
                      colaboradores y sus representantes, en temas relacionados a
                      la gestión de seguridad y salud en el trabajo
                    </Typography>
                  </Box>
                  <Box>
                    <Box></Box>
                    <Typography className="TextPolitica45001">
                      Suministrar los recursos necesarios y adecuados para la
                      protección de nuestros colaboradores de acuerdo a los
                      peligros identificados en sus actividades.
                    </Typography>
                  </Box>
                  <Box>
                    <Box></Box>
                    <Typography className="TextPolitica9001">
                      Ningún trabajador podrá realizar sus actividades bajo los
                      efectos del alcohol, drogas y/o estupefacientes
                    </Typography>
                  </Box>
                  <Box>
                    <Box></Box>
                    <Typography className="TextPolitica9001">
                      El colaborador al detectar un trabajo inseguro o presencia
                      de fatiga y somnolencia está en el derecho y la obligación
                      de utilizar la herramienta “Para, Piensa y Actúa”; ante
                      ello, no se tomará ningún tipo de represalias y solo se
                      reiniciarán las actividades si en la evaluación de riesgos
                      se determina que no afecta la seguridad e integridad física
                      y mental de los colaboradores.
                    </Typography>
                  </Box>
                  <Box>
                    <Box></Box>
                    <Typography className="TextPolitica9001">
                      <Box>
                        <Box></Box>
                        <Typography className="TextPolitica9001">
                          Ningún trabajador podrá realizar sus actividades bajo
                          los efectos del alcohol, drogas y/o estupefacientes
                        </Typography>
                      </Box>
                    </Typography>
                  </Box>
                  <Box>
                    <Box></Box>
                    <Typography className="TextPolitica9001">
                      Contar con hojas de ruta que garanticen tránsitos seguros
                      contando con el apoyo tecnológico.
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography className="TextPolitica9001">
                    Se asegurará el cumplimiento de objetivos y la mejora continua
                    del sistema de gestión de Seguridad y Salud en el trabajo,
                    asegurando su compatibilidad con otros sistemas de Gestión de
                    la organización.
                  </Typography>
                </Box>
                <Box>
                  <Typography>V.01</Typography>
                  <Typography>07/07/2021</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

    </Box>
  );
};

export default Politica45001;
