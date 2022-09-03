import React from 'react'
import Container from "@mui/material/Container";
import { Grid, Link, Typography, Box } from '@mui/material'
import "../../assets/styles/EquipodeTrabajo/EquipoTrabajo.scss"
import Image from "../../assets/img/Nosotros/nosotros_1.jpg";
import Image1 from "../../assets/img/Nosotros/nosotros02.jpg";
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: "black",
    fontSize: "22px",
    fontWeight: "bold",
    borderRadius: "25px",
    textTransform: "none",
    marginTop:"30px",
    backgroundColor: "rgba(211, 211, 211, 0.43)",
    border: "1.5px solid white",
    padding: "4.5px 30px",
    '&:hover': {
        backgroundColor: "white",
        color: "black"
    },
}));

const Equipo = () => {
    return (

        <Container className='ContainerEquipo'>
            <Box textAlign="center" paddingBottom="3%">
                <Typography className='TittleEquipo'>Nuestro Equipo</Typography>
            </Box>
            <Box paddingBottom="35px">
                <Typography className='TextEquipoTittle'> Por mi familia y su futuro, yo trabajo seguro
                </Typography>
                {/* <Typography className='TextEquipoTittle'>el diseño de productos, el control de calidad y los servicios de consultoría.
                </Typography> */}
            </Box>
            <Box className='containerNuestroEquipo'>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Box className='contenedor1Img'>
                            <img src={Image1} width="100%" height="100%" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box className='contenedor2Img'>
                            <img src={Image} width="100%" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box style={{width:"100%"}}>
                <Box display="flex" justifyContent="center">
                    <ColorButton variant="contained" size='large' href="/galeria">Galeria</ColorButton>
                </Box>
            </Box>


            {/* <Box className='ContainerCardsEquipo'>
                <Grid container className='GridContainerCardsEquipo'>
                    <Grid item xs={3} className="GridItemCardEquipo" >
                        <Box className='containerImgCardEquipo'>
                            <img src={carol} width="100%" />
                        </Box>
                        <Box textAlign="center" marginTop="21px">
                            <Typography className='TittleCardEquipo' >
                                Nombre y apellido
                            </Typography>
                            <Typography className='TextCardEquipo'>
                                Carol Transmdicas
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3} className="GridItemCardEquipo" >
                        <Box className='containerImgCardEquipo'>
                            <img src={carol} width="100%" />
                        </Box>
                        <Box textAlign="center" marginTop="21px">
                            <Typography className='TittleCardEquipo' >
                                Nombre y apellido
                            </Typography>
                            <Typography className='TextCardEquipo'>
                                Carol Transmdicas
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3} className="GridItemCardEquipo" >
                        <Box className='containerImgCardEquipo'>
                            <img src={carol} width="100%" />
                        </Box>
                        <Box textAlign="center" marginTop="21px">
                            <Typography className='TittleCardEquipo' >
                                Nombre y apellido
                            </Typography>
                            <Typography className='TextCardEquipo'>
                                Carol Transmdicas
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3} className="GridItemCardEquipo" >
                        <Box className='containerImgCardEquipo'>
                            <img src={carol} width="100%" />
                        </Box>
                        <Box textAlign="center" marginTop="21px">
                            <Typography className='TittleCardEquipo' >
                                Nombre y apellido
                            </Typography>
                            <Typography className='TextCardEquipo'>
                                Carol Transmdicas
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box> */}
        </Container>
    )
}

export default Equipo