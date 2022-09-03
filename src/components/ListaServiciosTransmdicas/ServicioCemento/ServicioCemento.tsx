import React from 'react'
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "../../../assets/img/otros/camionprueba.jpg";
import Grid from '@mui/material/Grid'
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import "../../../assets/styles/ListadeServicios/Cemento/Cemento.scss"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import imagen from "../../../assets/img/Servicios/soldadores.jpg"
import { Box } from '@mui/material';

const Cemento = () => {
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
                                Transporte de Cemento
                            </Typography>
                            <Typography variant="body2" className='CementoText'>
                                El transporte de cemento a granel se realiza en semirremolques
                                denominados bombonas, las cuales tienen un sistema especialmente
                                diseñado para el optimo transporte de cemento, cal y otros insumos relacionados
                                , los cuales son depositados en silos dentro de las instalaciones de nuestros clientes.


                                {/* Realizamos el transporte de cemento a granel en bombonas
                                desde la planta hasta las instalaciones del cliente final
                                aplicando los controles operaciones y de seguridad para
                                asegurar su tránsito seguro. */}
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
                    <Typography className='TittleBeneficiosCemento'>
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
                            	Vehículos adecuados e implementados
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
                            	Cumplimiento de estándares de cliente
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}

export default Cemento