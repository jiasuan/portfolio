'use client';
import { Fragment, useEffect, useState } from 'react';

import Image from "next/image";
import styles from "./page.module.css";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { appWithTranslation } from 'next-i18next'
import { useTranslation } from 'next-i18next'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';

import Collapse from '@mui/material/Collapse';

import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

const data = [
  {
    "id": "1",
    "name": ""
  }
]


function App(){

  const theme = createTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
   
  });

  return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Portfolio/>
    </ThemeProvider>
  )
}

function Portfolio() {

  const { t } = useTranslation('')


  return (
    <main>
      <Box sx={{backgroundColor: "white"}}>

        <Header/>
        <Box sx={{height: '100%', background: "#F9FBF2"}}>
          <Section_Home/>
        </Box>
      
        <Box sx={{minHeight: '100vh'}}>
          <Section_Projects/>
        </Box>

      </Box>

    </main>
  );
}


function Header(){

  return(
    <Box>
        
    </Box>
  )
}


function Section_Home(){

  return(
    <Fragment>
      <Box sx={{textAlign: "center", py: 10}}>
          <Typography variant="h1" sx={{fontWeight: "bold"}}>
            Hello, I'm Louis Tan Jia Suan
          </Typography>
          <Typography variant="subtitle1" sx={{fontStyle: "italic"}}>
            My hand is strong, my friends call me Louis Armstrong..
          </Typography>
          <Typography variant="h4" sx={{fontWeight: "bold"}}>
            Frontend developer based in Kuala Lumpur, Malaysia.
          </Typography>
      </Box>
      
      <Box sx={{position: "relative", height: "30vh", width: "100%", mt: 12}}>
        <Image
          src="/assets/minion.png"
          fill
          style={{objectFit:"contain"}}
          alt="Picture of the King Bob"
        />
      </Box>
       
      <Box sx={{position: "relative", height: "30vh", width: "100%"}}>
        <Image
          src="/assets/brick.jpg"
          fill
          style={{objectFit:"cover"}}
          alt="Picture of the the Wall"
        />
      </Box>

  
    </Fragment>
  )
}


function Section_Projects(){

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          const currentScrollPos = window.pageYOffset;
          const isVisible = currentScrollPos > 100; // Change 100 to whatever offset you prefer
          setIsVisible(isVisible);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    
    
  }

  const projectsArr = [
    {
      id: "1",
      name: "CUB",
      title: "Cathay United Bank Taiwan",
      description: "Develop ATM Terminal Software, Provide customer support and package delivery in all phases.",
      date: "2019",
      logo: "/assets/cub.png"
    },
    {
      id: "2",
      name: "Genting",
      title: "Software Testing",
      description: "Testing on Software, Terminal Agent, Microservices, Server Request and Terminal machine integration testing and package release.",
      date: "2019",
      logo: "/assets/genting.png"
    },
    {
      id: "3",
      name: "OCBC Singapore",
      title: "OCBC Singapore",
      description: "Develop new transaction (Money Lock) on existing ATM software.",
      date: "2019",
      logo: "/assets/ocbc.png"
    },
    {
      id: "4",
      name: "NCR Malaysia",
      title: "Automate Build Package Tool",
      description: "Develop automated build tool for release version packages into different phase and versions.",
      date: "2019",
      logo: "/assets/ncr.png"
    },
    {
      id: "5",
      name: "NCR Malaysia",
      title: "Report Generation Tool",
      description: "Develop report generation tool to generate different kind of reports in preset formats.",
      date: "2019",
      logo: "/assets/ncr.png"
    },
    {
      id: "6",
      name: "CUBC",
      title: "Cathay United Bank Cambodia",
      description: "Develop new transactions and fixes on ATM software. Provide customer support and package delivery.",
      date: "2019",
      logo: "/assets/cubc.svg"
    },
    {
      id: "7",
      name: "InterX",
      title: "Banking Terminal Advertisement Solution",
      description: "Developed end to end personalized advertisement software for bank terminal, admin dashboard to CRUD advertisement content, rules, and deployment.",
      date: "2019",
      logo: "/assets/interx.png"
    },
    {
      id: "8",
      name: "SDMS",
      title: "Sofware Distribution Management System",
      description: "Developed admin dashboard for bank user to retrieve terminal logs, distribute software to selected terminals and more.",
      date: "2019",
      logo: "/assets/sdms.png"
    },
    {
      id: "9",
      name: "myESG",
      title: "ESG Disclosure platform for SME",
      description: "Developed ESG platform empowers organizations to enhance and disclose their environmental, social, and governance practices and performance.",
      date: "2019",
      logo: "/assets/myesg.png"
    }
  ];


  return(
    <Fragment >
      <Box sx={{background: "#FFEDE1"}}>
        <Box sx={{textAlign: "center", p: "10% 20%"}}>
          <Typography variant="h4" sx={{fontWeight: "bold"}}>
            My Exciting Projects
          </Typography>
          <Typography variant="h5">
            Over the past few years, I've had the opportunity to work on various projects in the banking terminal software industry, along with amazing people!
          </Typography>
        </Box>
      </Box>
        
      <Grid container sx={{alignItems: "stretch", justifyContent: "center", px: "10%", pb: 4, mt: "-10%"}} spacing={8}>
        {
          projectsArr.map((item, index)=>{
            return(
              <Fragment key={`project-${item.name}-${index}`}>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                  <Card sx={{  opacity: isVisible ? 1: 0, transition: 'opacity 0.5s ease-in-out',   display: "flex", flexDirection: "column",  borderRadius: "10px", boxShadow: "3px 1px 11px 0px rgba(171,165,165,0.75)", p: 4, alignItems: "center", textAlign: "center" , height: "100%"}}>
                    <Box sx={{position: "relative", height: "100%", width: "100%", height: "100px"}}>
                        <Image
                          src={item.logo}
                          fill
                          style={{objectFit:"contain"}}
                          alt={item.name}
                        />
                    </Box>
                    <Box sx={{py: 2}}>
                    <Typography variant='h5' fontWeight={"bold"}>
                        {item.title}
                      </Typography>
                      <Typography variant='h6'>
                        {item.description}
                      </Typography>
                    </Box>
                    
                    {/* <CardActions>
                      <Button onClick={()=>{handleClick(item)}}>See More</Button>
                    </CardActions> */}
                  </Card>
                </Grid>
              </Fragment>
            )

          })
        }
      </Grid>

    </Fragment>
  )
}


export default appWithTranslation(App)