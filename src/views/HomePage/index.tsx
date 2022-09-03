import React from "react";
import BannerHome from "../../components/Banner/Banner";
import Header from "../../components/sections/header/header";
import NosotrosHome from "../../components/Nosotros-Home/NosotrosHome";
import MissionVision from "../../components/MisionyVision-Home/MisionVisionHome";
import VerticalTabs from "../../components/TapVerticalHome/TapVerticalHome";
import CertiBar from "../../components/CertificacionesBarHome/CertificacioneBarCHome";
import CardCerti from "../../components/CardsCertificaciones/CardCertificacion";
import ClientesBar from "../../components/clientesbar/ClientesBarHome";
import Video from "../../components/Video/video";
import { TextField, Button } from "@mui/material";
import { Box } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export default function HomePage() {

  return (
    <>
      <Header />
      <Video />

      <section id="banner"><BannerHome /> </section>
      <NosotrosHome />
      {/* <MissionVision/> */}
      <VerticalTabs />
      <CertiBar />
      <CardCerti />
      <ClientesBar />
    </>
  );
}
