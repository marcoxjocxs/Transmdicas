import React from "react";
/* , { lazy, Suspense } */
import { Route, Switch } from "react-router-dom"
import MaterialesPeligrosos from "../components/ListaServiciosTransmdicas/ServicioGlp/ServicioGlp";
import HomePage from "../views/HomePage";
import NosotrosPage from "../views/NosotrosPage";
import ServiciosPage from "../views/ServicesPage";
import HidrocarburosPage from "../views/ServicesPage/ListaServicePages/HidrocarburosPage";
import CementoPage from "../views/ServicesPage/ListaServicePages/CementoPage";
import GlpPage from "../views/ServicesPage/ListaServicePages/GlpPage";
import ContactoPage from '../views/Contacto/Contacto';
import CargasDiversasPage from "../views/ServicesPage/ListaServicePages/CargasDiversasPage";
import PoliticaCalidad9001 from "../views/PoliticasPage/Politica9001Page";
import PoliticaCalidad45001 from "../views/PoliticasPage/Politica45001Page";
import Politica39001Page from '../views/PoliticasPage/Politica39001Page';
import Politica14001Page from '../views/PoliticasPage/Politica14001Page';
import GalleryPage from "../views/Galeria";



export const baseUrl = "/";
export const HomeUrl = `${baseUrl}home`;
export const serviceUrl = `${baseUrl}Servicios/`;
export const NosotrosUrl = `${baseUrl}Nosotros`;
export const ServiciosUrl = `${baseUrl}Servicios`;
export const HidrocarburosUrl = `${serviceUrl}Hidrocarburos`;
export const CargasDiversasUrl = `${serviceUrl}CargasDiversas`;
export const GlpUrl = `${serviceUrl}Glp`;
export const CementoUrl = `${serviceUrl}Cemento`;
export const ContactoUrl = `${baseUrl}Contacto`;
export const Politica9001Url = `${baseUrl}9001`;
export const Politica45001Url = `${baseUrl}45001`;
export const Politica39001Url = `${baseUrl}39001`;
export const Politica14001Url = `${baseUrl}14001`;
export const GalleryUrl = `${baseUrl}galeria`;
export const Routes: React.FC = () => (
    <Switch>
      <Route exact path={baseUrl} component={HomePage} />
      <Route exact path={NosotrosUrl} component={NosotrosPage} />
      <Route exact path={ServiciosUrl} component={ServiciosPage} />
      <Route exact path={HidrocarburosUrl} component={HidrocarburosPage} />
      <Route exact path={CementoUrl} component={CementoPage} />
      <Route exact path={CargasDiversasUrl} component={CargasDiversasPage} />
      <Route exact path={GlpUrl} component={GlpPage} />
      <Route exact path={ContactoUrl} component={ContactoPage} />
      <Route exact path={Politica9001Url} component={PoliticaCalidad9001} />
      <Route exact path={Politica45001Url} component={PoliticaCalidad45001} />
      <Route exact path={Politica39001Url} component={Politica39001Page} />
      <Route exact path={Politica14001Url} component={Politica14001Page} />
      <Route exact path={GalleryUrl} component={GalleryPage} />
    </Switch>
  );
  
  export default Routes;
  