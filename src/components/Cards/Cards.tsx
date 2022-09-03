import { Box } from '@mui/material'
import React from 'react'
import "../../assets/styles/Cards/CardsStyles.scss";
import Grid from "@mui/material/Grid";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card1 from "../../assets/img/Home/Cards/Card1.jpg"
import Card2 from "../../assets/img/Home/Cards/Card2.jpg"
import Card3 from "../../assets/img/Home/Cards/Card3.jpg"
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: "white",
    fontSize: "11px",
    fontWeight: "bold",
    borderRadius: "15px",
    textTransform: "none",
    border: "1.5px solid white",
    padding: "4.5px 30px",
    '&:hover': {
        backgroundColor: "white",
        color: "black"
    },
}));

const Cards = () => {
    return (
        <Container className='contenedordecards'>
            <Grid container spacing={3}>
                <Grid item xs={6} md={4}>
                    <Box className='Card'>
                        <Box className='imagen'><img src={Card1} alt="" /></Box>
                        <Box className='contenido'>
                            <Box sx={{ marginBottom: "15px" }}>
                                <Typography className='title1' component="div" >
                                    Transporte de Hidrocarburos
                                </Typography>
                                <Typography className="textdescription">
                                    Es DiselB5 S-50, Gasohol 84 , 90 ,95,97
                                </Typography>
                            </Box>
                            <Box display="flex" justifyContent="flex-end">
                                <ColorButton variant="outlined" size='large' href="/Servicios/Hidrocarburos">Ver mas</ColorButton>
                            </Box>

                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Box className='Card'>
                        <Box className='imagen'><img src={Card2} alt="" /></Box>
                        <Box className='contenido'>
                            <Box sx={{ marginBottom: "15px" }}>
                                <Typography className='title1' component="div" >
                                    Transporte de GLP
                                </Typography>
                                <Typography className="textdescription">
                                    Gas licuado de petroleo a granel en unidades primarias y secundarias 
                                </Typography>
                            </Box>
                            <Box display="flex" justifyContent="flex-end">
                                <ColorButton variant="outlined" size='large'  href="Servicios/Glp">Ver mas</ColorButton>
                            </Box>

                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Box className='Card'>
                        <Box className='imagen'><img src={Card3} alt="" /></Box>
                        <Box className='contenido'>
                            <Box sx={{ marginBottom: "15px" }}>
                                <Typography className='title1' component="div" >
                                    Transporte de Cargas Diversas
                                </Typography>
                                <Typography className="textdescription">
                                    Cargas en estado solido 
                                </Typography>
                            </Box>
                            <Box display="flex" justifyContent="flex-end" >
                                <ColorButton variant="outlined" size='large' href="Servicios/CargasDiversas">Ver mas</ColorButton>
                            </Box>

                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Cards