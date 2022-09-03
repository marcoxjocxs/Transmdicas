import React from "react";
import Container from "@mui/material/Container";
import { Box, Grid, Link, Typography } from "@mui/material";
import "../../../assets/styles/Footer/FooterStyles.scss";
import transmdicas from "../../../assets/img/Logos/transmdicasV2.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
export default function Footer() {
  return (
    <footer className="footerStyle">
      <Box>
        <Container>
          <Grid container justifyContent="space-between">
            <Grid item sm={5} xs={12}>
              <Box>
                {/* <Img src={logoNa} /> */}
                <Link href="">
                  <img src={transmdicas} className="img_logo_footer" style={{ marginBottom: "25px" }} />
                </Link>
                <Box>
                  <Typography className="textTitleFooter">
                    Acerca de Nosotros
                  </Typography>
                  <Typography className="textTextFooter">
                    TRANSMDICAS S.R.L. es una de las principales empresas
                    que conforman el GRUPO PEZO, la cual cuenta con amplia
                    trayectoria en el transporte de materiales peligrosos y carga en general
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Grid container spacing={3} justifyContent="space-between">
                {/* <Hidden smDown> */}
                <Grid item xs={6}>
                  <Box className="SeccionFooter2">
                    <Typography
                      variant="caption"
                      display="block"
                      component="div"
                      className="TituloLinkContactFooter"
                    >
                      Link
                    </Typography>
                    <ul className="ulstylesFooter">
                      <li className="li-text-Inicio">
                        <Link href="/inicio">Inicio</Link>
                      </li>
                      <li className="li-text-Contacto">
                        <Link href="/nosotros">Nosotros</Link>
                      </li>
                      <li className="li-text-Contacto">
                        <Link href="/servicios/">Servicios</Link>
                      </li>
                      <li className="li-text-Contacto">
                        <Link href="/contacto">Contacto</Link>
                      </li>
                    </ul>
                  </Box>
                </Grid>
                {/*  </Hidden> */}
                <Grid item sm={6} xs={12}>
                  <Box className="SeccionFooter2">
                    <Typography
                      variant="caption"
                      display="block"
                      component="div"
                      className="TituloLinkContactFooter"
                    >
                      Contacto
                    </Typography>
                    <ul className="ulstylesFooter">
                      <li className="li-text-Contacto">(054) 40-1065</li>
                      <li className="li-text-Contacto">
                        transmdicas@grupopezo.com
                      </li>
                      <li className="li-text-Contacto">
                        Urb.Villa Hermosa Mz C-lote 11
                      </li>
                      <li className="li-text-Contacto">
                        PAUCARPATA AREQUIPA AREQUIPA{" "}
                      </li>
                    </ul>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Box style={{ borderTop: "1px solid white", marginTop: "30px" }}>
            <ul className="social-links-Footer">
              <li>
                <Link href="https://www.facebook.com/TransmdicasS.R.L" target="_blank">
                  <FacebookIcon />
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/transmdicas_srl/?hl=es" target="_blank">
                  <InstagramIcon />
                </Link>
              </li>
            </ul>
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
