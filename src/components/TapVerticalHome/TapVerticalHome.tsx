import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Container, Grid, useMediaQuery, useTheme } from '@mui/material';
import "../../assets/styles/Home/TapVerticalHome/TapVerticalStyles.scss";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function TapVerticalHome() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const theme = useTheme();
  const matchLg = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      style={{ paddingBottom: "50px", paddingTop: "50px" }}
      className="tabContainer"
    >
      <Container className="containerGeneral">
        <Box

        >
          <Grid container>
            <Grid item xs={12} md={5}>
              <Tabs
                orientation={matchLg ? "vertical" : "horizontal"}
                variant={matchLg ? "standard" : "scrollable"}
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
              >
                <Tab label="Transporte de Hidrocarburos" {...a11yProps(0)} />
                <Tab
                  label="Transporte de GLP"
                  {...a11yProps(1)}
                />
                <Tab label="Transporte de Cemento" {...a11yProps(2)} />
                <Tab label="Transporte Cargas Diversas" {...a11yProps(3)} />
              </Tabs>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box className="contenedorInfo">
                <Box className="BorderPrueba">
                  <TabPanel value={value} index={0}>
                    <Box component="div" my={2} whiteSpace="nowrap">
                      <Typography className="TituloTap">
                        Transporte de Hidrocarburos
                      </Typography>
                    </Box>
                    <Typography className="TextTap">
                      Realizamos el transporte de hidrocarburos por carretera desde los
                      terminales de carga hasta las instalaciones de nuestros clientes
                      aplicando el monitoreo de nuestras unidades para asegurar el transporte
                      seguro del producto
                    </Typography>
                    <Box component="div" my={5} whiteSpace="nowrap">
                      <Button
                        className="ButtonConoce"
                        variant="contained"
                        href="Servicios/Hidrocarburos"
                      >
                        Conocer mas
                      </Button>
                    </Box>
                  </TabPanel>

                  <TabPanel value={value} index={1}>
                    <Box component="div" my={2} whiteSpace="nowrap">
                      <Typography className="TituloTap">
                        Transporte de GLP A Granel
                      </Typography>
                    </Box>
                    <Typography className="TextTap">
                      Realizamos el transporte primario de GLP a granel desde el 2012
                      desde las plantas procesadoras hasta su destino final y contamos
                      con servicios de transporte primario en unidades de 13600 galones y transporte secundario de GLP
                      a granel en unidades de 4300, 6400 y 9000 galones, adecuados a la necesidad del cliente.
                    </Typography>
                    <Box component="div" my={5} whiteSpace="nowrap">
                      <Button
                        className="ButtonConoce"
                        variant="contained"
                        href="Servicios/Glp"
                      >
                        Conocer mas
                      </Button>
                    </Box>
                  </TabPanel>

                  <TabPanel value={value} index={2}>
                    <Box component="div" my={2} whiteSpace="nowrap">
                      <Typography className="TituloTap">
                        Transporte de Cemento
                      </Typography>
                    </Box>
                    <Typography className="TextTap">
                      Realizamos el transporte de cemento a granel en bombonas desde
                      la planta hasta las instalaciones del cliente final aplicando
                      los controles operaciones y de seguridad para asegurar su tránsito seguro.
                    </Typography>
                    <Box component="div" my={5} whiteSpace="nowrap">
                      <Button
                        className="ButtonConoce"
                        variant="contained"
                        href="Servicios/Cemento"
                      >
                        Conocer mas
                      </Button>
                    </Box>
                  </TabPanel>

                  <TabPanel value={value} index={3}>
                    <Box component="div" my={2} whiteSpace="nowrap">
                      <Typography className="TituloTap">
                        Transporte Cargas Diversas
                      </Typography>
                    </Box>
                    <Typography className="TextTap">
                      Este se caracteriza por el transporte de productos a granel en estado
                      sólido para las diferentes rutas del sur, centro y norte del país,
                      tales como granos, especias alimenticias, misceláneos, madera, azúcar, otros.
                    </Typography>
                    <Box component="div" my={5} whiteSpace="nowrap">
                      <Button
                        className="ButtonConoce"
                        variant="contained"
                        href="Servicios/CargasDiversas"
                      >
                        Conocer mas
                      </Button>
                    </Box>
                  </TabPanel>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
