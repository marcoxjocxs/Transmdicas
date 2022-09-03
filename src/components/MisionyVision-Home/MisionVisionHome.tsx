import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid'
import { Box } from '@mui/material';
import "../../assets/styles/Home/MisionVision/MisionVisionHomeStyles.scss"
export default function MissionVision() {

    return (
        <Container style={{ paddingBottom: "50px" , paddingTop:"50px"}}>
            <Grid container spacing={3} justifyContent="center" >
                <Grid item md={6} xs={12} sm={8} className="containerMision">
                    <Box className="contenedor1">
                        <Typography className="textTittlemisionvision">
                            Misión
                        </Typography>
                        <Box>
                            <Typography variant="body1" className="textmisionvision">
                                Somos una empresa de carga pesada a nivel nacional, presentes
                                en la industria y la mineria, contamos con profesionales
                                comprometidos con la satisfaccion de nuestros clientes y la
                                mejora continua en nuestros procesos
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={6} xs={12} sm={8}>
                    <Box className="contenedor1">
                        <Typography className="textTittlemisionvision">
                            Visión
                        </Typography>
                        <Box>
                            <Typography variant="body1" className="textmisionvision">
                                Transportar soluciones integrales con seguridad y confiabilidad
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>

    );
}