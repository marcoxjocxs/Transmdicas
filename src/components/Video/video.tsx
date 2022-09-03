import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "../../../assets/img/otros/camionprueba.jpg";
import Grid from "@mui/material/Grid";
import "../../assets/styles/Video/VideoStyles.scss";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TextField, Button } from "@mui/material";
import { Box } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Video = () => {


  const [visible, setVisible] = useState(true)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 0) {
      setVisible(false)
    }
    else if (scrolled <= 0) {
      setVisible(true)
    }
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'auto'
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    });
  };
  window.addEventListener('scroll', toggleVisible);

  return (
    <Box style={{ position: "relative" }}>
      <Box style={{ width: "100%", objectFit: "contain", minHeight: "100%" }}>
        <video loop autoPlay muted className="videoTransmdicas">
          <source
            src={require("../../assets/video/videoTransmdicas.mp4")}
            type="video/mp4"
          />
        </video>
      </Box>
      <Box className="ButtonScroll">
        <IconButton color="primary" aria-label="scroll" component="label">
          <a href="#banner" ><input hidden type="submit" /></a>
          <KeyboardArrowDownIcon fontSize="large" />
        </IconButton>
      </Box>

    </Box>
  );
};
export default Video;
