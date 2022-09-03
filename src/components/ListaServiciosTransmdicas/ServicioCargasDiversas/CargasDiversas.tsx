import React from 'react'
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "../../../assets/img/otros/camionprueba.jpg";
import Grid from '@mui/material/Grid'
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import "../../../assets/styles/ListadeServicios/CargasDiversas/CargasDiversas.scss"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import imagen from "../../../assets/img/Servicios/vigilantes.jpg"
import { Box } from '@mui/material';

const CargasDiversas = () => {
    return (
        <Container maxWidth="md" style={{ paddingTop: "11%", paddingBottom: "8%" }}>
            <Grid
                container
                spacing={2}
                justifyContent="space-around"
                alignItems="center"
                className='Container1Informacion'
            >
                <Grid item xs={6}>
                    <Grid
                        container
                        spacing={3}
                        justifyContent="space-around"
                        alignItems="center"
                    >
                        <Grid item xs={12}>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                className='negrita'
                            >
                                Transporte de Cargas Diversas
                            </Typography>
                            <Typography variant="body2" className='CargasDiversasText'>

                            El transporte de cargas diversas se realiza mediante plataformas 
                            o camabajas según la necesidad del cliente y los criterios del
                             producto a transportar, nos aseguramos de brindar soluciones
                              integrales con seguridad y confiabilidad asegurando la plena satisfacción de nuestros clientes

                           {/*  Este se caracteriza por el transporte de productos a granel
                             en estado sólido para las diferentes rutas del sur, centro 
                             y norte del país, tales como granos, especias alimenticias, 
                             misceláneos, madera, azúcar, otros. */}
                            </Typography>
                            <br />
                            <Typography>
                                {/* Tenemos una amplia trayectoria con 14 años */}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <div className='imagenNosotrosHome'>
                        <img src={imagen} width="100%" />
                    </div>
                </Grid>
            </Grid>
            <Box>
                <Box className='ContenedorTittleBeneficios'>
                    <Typography className='TittleBeneficiosCargasDiversas'>
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
                            	Amplias rutas de transporte
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
                            	Transporte de materiales diversos
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}

export default CargasDiversas