import React from 'react'
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "../../../assets/img/otros/camionprueba.jpg";
import Grid from '@mui/material/Grid'
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import "../../../assets/styles/ListadeServicios/Glp/Glp.scss"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import alejandroimagen from "../../../assets/img/Galeria/16.jpg"
import { Box } from '@mui/material';

const Glp = () => {
    return (
        <Container maxWidth="md" style={{ paddingTop: "11%", paddingBottom: "8%" }}>
            <Grid
                container
                spacing={2}
                justifyContent="space-around"
                alignItems="center"
                className='Container1Informacion'
            >
                <Grid item xs={12} md={6}>
                    <Grid
                        container
                        spacing={3}
                        justifyContent="space-around"
                        alignItems="center"
                    >
                        <Grid item xs={12} md={12}>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                className='negrita'
                            >
                                Transporte de GLP a Granel
                            </Typography>
                            <Typography variant="body2" className='GlpText'>
                                El transporte de GLP a granel se realiza en cisternas de GLP diseñadas 
                                para asegurar el transporte seguro del producto alineados a la normativa 
                                legal vigente y aplicable para la óptima entrega en los diferentes establecimientos, 
                                sean plantas de GLP, granjas, industrias, estaciones, hoteles, otros.
                               {/*  Realizamos el transporte primario de GLP a granel desde el 2012 desde las plantas
                                procesadoras hasta su destino final y contamos con unidades con un volumen
                                de 13600 galones y transporte secundario de GLP a granel G 4300, 6400 y 9000
                                para los diferentes establecimientos como granjas, industrias, estaciones, hoteles, otros. */}
                            </Typography>
                            <br />
                            <Typography>
                                {/* Tenemos una amplia trayectoria con 14 años */}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={5}>
                    <div className='imagenNosotrosHome'>
                        <img src={alejandroimagen} width="100%" />
                    </div>
                </Grid>
            </Grid>
            <Box>
                <Box className='ContenedorTittleBeneficios'>
                    <Typography className='TittleBeneficiosGlp'>
                        Beneficios
                    </Typography>
                </Box>
                <Box className='ContenedorCardBeneficio'>
                    <Grid container spacing={3}>
                        <Grid item md={5} xs={6} className="CardBeneficio">
                            <Box display="inline-flex" style={{ alignItems: "center", margin: "0 15px" }}>
                                <CheckCircleIcon />
                            </Box>
                            <Box>
                                <Typography className='TextBeneficio1'>
                                	Transporte rápido y seguro
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item md={5} xs={6} className="CardBeneficio">
                            <Box display="inline-flex" style={{ alignItems: "center", margin: "0 15px" }}>
                                <CheckCircleIcon />
                            </Box>
                            <Box>
                            	Estándares de seguridad 
                            </Box>
                        </Grid>
                        <Grid item md={5} xs={6} className="CardBeneficio">
                            <Box display="inline-flex" style={{ alignItems: "center", margin: "0 15px" }}>
                                <CheckCircleIcon />
                            </Box>
                            <Box>
                                Monitoreo GPS en unidades asignadas
                            </Box>
                        </Grid>
                        <Grid item md={5} xs={6} className="CardBeneficio">
                            <Box display="inline-flex" style={{ alignItems: "center", margin: "0 15px" }}>
                                <CheckCircleIcon />
                            </Box>
                            <Box>
                            	Soluciones integrales en ruta
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}

export default Glp