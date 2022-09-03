import React from "react";
import Container from "@mui/material/Container";
import { Box, Grid, Link, Typography } from "@mui/material";
import "../../../assets/styles/Politicas/39001/39001Styles.scss";
import poster1 from "../../../assets/img/Politicas/seguridadvial.jpg";
import Image from "../../../assets/img/Home/Nosotros/Nosotros03.jpg";
const Politica39001 = () => {
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
      <Grid container style={{ padding: "82px 30px" }} spacing={3}>
        <Grid item xs={12} md={6}>
          <Box className="PoliticasInformacion">
            <Box textAlign="center">
              <Typography className="TittlePolitica39001">
                Politica de Seguridad Vial
              </Typography>
            </Box>
            <Box>
              <Box>
                <Typography className="TextPolitica39001">
                  Somos una empresa de Transporte de carga general por
                  carretera, presentes en la industria y minería; contamos con
                  certificaciones internacionales y profesionales comprometidos
                  con la mejora continua en nuestros procesos.
                </Typography>
              </Box>
              <Box>
                <Typography className="TextPolitica39001">
                  Siendo conscientes de nuestra responsabilidad, nos
                  comprometemos a cumplir las 05 dimensiones de la seguridad
                  vial:
                </Typography>
              </Box>
              <Box>
                <Box>
                  <Box></Box>
                  <Typography className="TextPolitica39001">
                    1. Contar con conductores calificados que estén
                    comprometidos con su seguridad y la de los demás, portando
                    documentación actualizada según requerimientos de los entes
                    reguladores del Estado, estándares propios y de cliente.
                  </Typography>
                </Box>
                <Box>
                  <Box></Box>
                  <Typography className="TextPolitica39001">
                    2. Cumplir con el plan de mantenimiento de unidades con
                    personal idóneo promoviendo las inspecciones programadas y
                    el seguimiento de las mismas para transitar con vehículos
                    seguros
                  </Typography>
                </Box>
                <Box>
                  <Box></Box>
                  <Typography className="TextPolitica39001">
                    4. Contar con procedimientos para la atención de emergencias
                    de tránsito de diferentes circunstancias y difundirlas a
                    todo el personal, garantizando que la información se
                    mantenga clara y actualizada.
                  </Typography>
                </Box>
                <Box>
                  <Box></Box>
                  <Typography className="TextPolitica39001">
                    5. Respetar y cumplir los requisitos legales aplicables y
                    los compromisos adquiridos en relación a la seguridad vial
                  </Typography>
                </Box>
                <Box>
                  <Box></Box>
                  <Typography className="TextPolitica9001">
                    6. Cumplir y actualizar periódicamente los objetivos y metas
                    de seguridad vial de la organización.
                  </Typography>
                </Box>

                <Box>
                  <Box></Box>
                  <Typography className="TextPolitica9001">
                    3. Contar con hojas de ruta que garanticen tránsitos seguros
                    contando con el apoyo tecnológico.
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Typography className="TextPolitica9001">
                  La gerencia se compromete a brindar recursos para mantener y
                  mejorar continuamente el sistema de gestión de seguridad vial.
                </Typography>
              </Box>
              <Box>
                <Typography>V.04</Typography>
                <Typography>29/12/2021</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={5}>
          {/* <div className='imagenContenedor9001' style={{zIndex:2}}>
                        <img src={Image} className="imgNosotrosHome" />
                    </div> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Politica39001;
