import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "../../../assets/img/otros/camionprueba.jpg";
import Grid from "@mui/material/Grid";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import "../../assets/styles/Contacto/ContactoStyle.scss";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { TextField, Button } from "@mui/material";
import emailjs from "emailjs-com";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { FourMp } from "@mui/icons-material";
import Swal from "sweetalert2";
import { Box } from "@mui/material";
import img1 from "../../assets/img/Galeria/1.jpg";
import img2 from "../../assets/img/Galeria/2.jpg";
import img3 from "../../assets/img/Galeria/3.jpg";
import img4 from "../../assets/img/Galeria/4.jpg";
import img5 from "../../assets/img/Galeria/5.jpg";
import img6 from "../../assets/img/Galeria/6.jpg";
import img7 from "../../assets/img/Galeria/7.jpg";
import img8 from "../../assets/img/Galeria/8.jpg";
import img9 from "../../assets/img/Galeria/9.jpg";
import img10 from "../../assets/img/Galeria/10.jpg";
import img11 from "../../assets/img/Galeria/11.jpg";
import img12 from "../../assets/img/Galeria/12.jpg";
import img13 from "../../assets/img/Galeria/13.jpg";
import img14 from "../../assets/img/Galeria/14.jpg";
import img15 from "../../assets/img/Galeria/15.jpg";
import img16 from "../../assets/img/Galeria/16.jpg";
import img17 from "../../assets/img/Galeria/17.jpg";
import img18 from "../../assets/img/Galeria/18.jpg";
import img19 from "../../assets/img/Galeria/19.jpg";
import img20 from "../../assets/img/Galeria/20.jpg";
import img21 from "../../assets/img/Galeria/21.jpg";
import img22 from "../../assets/img/Galeria/22.jpg";
const Gallery = () => {


    return (
        <Box>
            <ImageList  cols={3} >
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
};


const itemData = [
    {
      img: img1,
      title: 'img1',
    },
    {
      img: img2,
      title: 'img2',
    },
    {
      img: img3,
      title: 'img3',
    },
    {
      img: img4,
      title: 'img4',
    },
    {
      img: img5,
      title: 'img5',
    },
    {
      img: img6,
      title: 'img6',
    },
    {
      img: img7,
      title: 'img7',
    },
    {
      img:img8,
      title: 'img8',
    },
    {
      img: img9,
      title: 'img9',
    },
    {
      img: img10,
      title: 'img10',
    },
    {
      img: img11,
      title: 'img11',
    },
    {
      img: img12,
      title: 'img12',
    },
    {
      img: img13,
      title: 'img13',
    },
    {
      img: img14,
      title: 'img14',
    },
    {
      img: img15,
      title: 'img15',
    },
    {
      img: img16,
      title: 'img16',
    },
    {
      img: img17,
      title: 'img17',
    },
    {
      img: img18,
      title: 'img18',
    },
    {
      img: img19,
      title: 'img19',
    },
    {
      img: img20,
      title: 'img20',
    },
    {
      img: img21,
      title: 'img21',
    },
    {
      img: img22,
      title: 'img22',
    },

  ];



export default Gallery;
