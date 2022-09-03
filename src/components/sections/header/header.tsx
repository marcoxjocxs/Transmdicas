import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Link, Drawer, IconButton, List, ListItem } from "@mui/material";

import "../../../assets/styles/Header/HeaderStyles.scss";
/* import transmdicas from "../../../assets/img/Logos/transmdicasV2.png"; */
import transmdicas from "../../../assets/img/Logos/transmdicasV2.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Hidden } from "@mui/material";
import PerfectScrollbar from "react-perfect-scrollbar";
import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [isHome, setIsHome] = React.useState(true);
  const [headerScroll, setHeaderScroll] = React.useState(false)
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  /* console.log(window.location.pathname) */
  const listenScrollEvent = (event: any) => {
    if (window.scrollY <= 10) {
      return setHeaderScroll(false);
    } else if (window.scrollY > 10) {
      return setHeaderScroll(true);
    }
  };

  const handleMenuOpen = () => {
    setOpenMenu(true);
  };

  const handleMenuClose = () => {
    setOpenMenu(false);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  React.useEffect(() => {
    if (window.location.pathname !== "/") {
      setIsHome(false)
      console.log(isHome);
      
    }
  })

  return (
    <>
      <header className={isHome ? headerScroll? "classHeader1" : "classHeader2" : ""}>
        <Box style={{ height: "100%" }}>
          <div className="cont-header">
            <div className="boximage">
              <Box className="TrapezoideHeader">
                <img src={transmdicas} className="img_logo" />
              </Box>
            </div>
            <div className="right-header">
              <div className="top-header">
                <div className="cont-top-header">
                  <ul className="information">
                    <Hidden mdDown>
                      <li>
                        Telefono: <a href="tel: (054) 40-1065">(054) 40-1065</a>
                      </li>
                      <li>
                        Email:{" "}
                        <a href="mailito: contacto@grupopeso.com">
                          transmdicas@grupopeso.com
                        </a>
                      </li>
                    </Hidden>
                  </ul>
                  <ul className="social-links">
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
                    {/* <li>
                            <Link href="" ><LinkedInIcon /></Link>
                        </li> */}
                  </ul>
                </div>
              </div>
              <nav className="navHeader">
                <Hidden mdDown>
                  <ul>
                    <li>
                      <NavLink to="/">Inicio</NavLink>
                    </li>
                    <li>
                      <NavLink to="/nosotros">Nosotros</NavLink>
                    </li>
                    <li>
                      <NavLink to="/servicios">Servicios</NavLink>
                    </li>
                    <li className="LinkClavePoliticas">
                      <a>Certificaciones</a>
                      <ul className="ulPoliticasMenu">
                        <li>
                          <NavLink to="/9001">Politica9001</NavLink>
                        </li>
                        <li>
                          <NavLink to="/14001">Politica14001</NavLink>
                        </li>
                        <li>
                          <NavLink to="/39001">Politica39001</NavLink>
                        </li>
                        <li>
                          <NavLink to="/45001">Politica45001</NavLink>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <NavLink to="/contacto">Contacto</NavLink>
                    </li>
                  </ul>
                </Hidden>
                <Hidden mdUp>
                  <Box
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="center"
                    style={{ height: "100%" }}
                  >
                    <IconButton
                      aria-label="delete"
                      size="medium"
                      onClick={openMenu ? handleMenuClose : handleMenuOpen}
                    >
                      <MenuIcon color="inherit" />
                    </IconButton>
                  </Box>
                </Hidden>
              </nav>
            </div>
          </div>
        </Box>
      </header>
      <Drawer
        open={openMenu}
        anchor="right"
        elevation={0}
        onClose={handleMenuClose}
      >
        <PerfectScrollbar>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              pb={2}
            >
              <IconButton color="inherit" onClick={handleMenuClose}>
                <CloseIcon />
              </IconButton>
            </Box>
            <List
              sx={{ width: "100%" }}
              component="ul"
              aria-labelledby="nested-list-subheader"
            >
              <ListItem button component="li">
                <NavLink
                  to="/"
                  activeClassName="active-link"
                  onClick={handleMenuClose}
                  onKeyDown={handleMenuClose}
                >
                  Inicio
                </NavLink>
              </ListItem>
              <ListItem component="li">
                <NavLink
                  to="/Nosotros"
                  activeClassName="active-link"
                  onClick={handleMenuClose}
                  onKeyDown={handleMenuClose}
                >
                  Nosotros
                </NavLink>
              </ListItem>
              <ListItem component="li">
                <NavLink
                  to="/Servicios"
                  activeClassName="active-link"
                  onClick={handleMenuClose}
                  onKeyDown={handleMenuClose}
                >
                  Servicios
                </NavLink>
              </ListItem>
              <ListItem component="li" className="Liclassresponsive">
                <a>Certificaciones</a>
                <ul>
                  <li>
                    <NavLink to="/9001">Politica9001</NavLink>
                  </li>
                  <li>
                    <NavLink to="/14001">Politica14001</NavLink>
                  </li>
                  <li>
                    <NavLink to="/39001">Politica39001</NavLink>
                  </li>
                  <li>
                    <NavLink to="/45001">Politica45001</NavLink>
                  </li>
                </ul>
              </ListItem>
              <ListItem component="li">
                <NavLink
                  to="/contacto"
                  className="linkContacto"
                  activeClassName="active-link"
                  onClick={handleMenuClose}
                  onKeyDown={handleMenuClose}
                >
                  Contacto
                </NavLink>
              </ListItem>
            </List>
          </Box>
        </PerfectScrollbar>
      </Drawer>
    </>
  );
};

export default Header;
