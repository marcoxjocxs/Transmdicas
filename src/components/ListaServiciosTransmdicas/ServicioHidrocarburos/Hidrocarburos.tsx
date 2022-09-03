import React from 'react'
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "../../../assets/img/otros/camionprueba.jpg";
import Grid from '@mui/material/Grid'
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import "../../../assets/styles/ListadeServicios/Hidrocarburos/Hidrocarburos.scss"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import alondraimagen from "../../../assets/img/Galeria/5.jpg"
import hidrocarburos from "../../../assets/img/Servicios/Hidrocarburos.jpg"
import { Box } from '@mui/material';

const Hidrocarburos = () => {
    return (
        <Container maxWidth="md" style={{ paddingTop: "11%", paddingBottom: "8%" }}>
            <Grid
                container
                spacing={4}
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
                                Transporte de Hidrocarburos
                            </Typography>
                            <Typography variant="body2" className='HidrocarburosText'>
                            El transporte de hidrocarburos se realiza a través de cisternas de combustible 
                            especialmente diseñadas para el transporte del mismo, las cuales cuentan 
                            con dispositivos adecuados para asegurar la hermeticidad de la cisterna evitando 
                            fugas o derrames de producto a lo largo del recorrido.
                            {/* Realizamos el transporte de hidrocarburos por carretera desde los terminales de
                            carga hasta las instalaciones de nuestros clientes 
                            aplicando el monitoreo de nuestras unidades para asegurar el transporte seguro del producto. */}
                            
                            </Typography>
                            <br />
                            <Typography>
                                {/* Tenemos una amplia trayectoria con 14 años */}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <div className='imagenNosotrosHome'>
                        <img src={hidrocarburos} width="100%" />
                    </div>
                </Grid>
            </Grid>
            <Box>
                <Box className='ContenedorTittleBeneficios'>
                    <Typography className='TittleBeneficiosHidrocarburos'>
                        Beneficios
                    </Typography>
                </Box>
                <Box className='ContenedorCardBeneficio'>
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item md={6} xs={6} className="CardBeneficio">
                            <Box display="inline-flex" style={{ alignItems: "center", margin: "0 15px" }}>
                                <CheckCircleIcon />
                            </Box>
                            <Box>
                                <Typography className='TextBeneficio1'>
                                    Transporte rápido y seguro
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item md={6} xs={6} className="CardBeneficio">
                            <Box display="inline-flex" style={{ alignItems: "center", margin: "0 15px" }}>
                                <CheckCircleIcon />
                            </Box>
                            <Box>
                                    Servicio personalizado por cliente
                            </Box>
                        </Grid>
                        <Grid item md={6} xs={6} className="CardBeneficio">
                            <Box display="inline-flex" style={{ alignItems: "center", margin: "0 15px" }}>
                                <CheckCircleIcon />
                            </Box>
                            <Box>
                                    Monitoreo GPS de unidades asignadas
                            </Box>
                        </Grid>
                        <Grid item md={6} xs={6} className="CardBeneficio">
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

export default Hidrocarburos