'use client';
import { Fragment, useState } from 'react';

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
      <Header/>
      <Box sx={{height: '100vh'}}>
        <Section_Home/>
      </Box>
      {/* <Box sx={{height: '100vh'}}>
        <Section_About/>
      </Box> */}
      <Box sx={{minHeight: '100vh'}}>
        <Section_Projects/>
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
    <Box>

      <Grid container sx={{px: 12, height: "100vh", alignItems: "center", justifyContent: "center", }}>

        <Grid item sm={6}>
          <Grid container sx={{alignItems: "center", justifyContent: "center"}}>
            <Grid item sm={12}>
              <Typography variant="h2">
                Bello, I'm Louis
              </Typography>
            </Grid>
            <Grid item sm={12}>
              <Typography variant="h5">
              A front end developer based in Kuala Lumpur, Malaysia
              </Typography>
            </Grid>
          </Grid>

        </Grid>
        <Grid item xs={12} sm={6} >
          <Box sx={{position: "relative", height: "40vh", width: "100%"}}>
          <Image
                src="/assets/minion.png"
                fill
      style={{objectFit:"contain"}}
                alt="Picture of the King Bob"
              />
          </Box>
              
            </Grid>

      </Grid>
    </Box>
  )
}

function Section_About(){

  return(
    <Box>
      

    </Box>
  )
}

function Section_Projects(){

  const [expanded, setExpanded] = useState(false);

  const handleOpen = () => {
    setExpanded(!expanded);
    
  }

  const projectsData = [
    {

    }
  ]

  return(
    <Box sx={{}}>
      <Box sx={{textAlign: "center", py: 8}}>
        <Typography variant="h4" sx={{fontWeight: "bold"}}>
          Projects
        </Typography>
      </Box>
        
        <Grid container sx={{alignItems: "center", justifyContent: "center"}}>


       
          <Grid item sm={8}>
            <CardActionArea onClick={()=>{handleOpen()}}>
              <Grid container sx={{minHeight: "200px", width: "100%", alignItems: "center", justifyContent: "center", boxShadow: "0px 0px 80px 0px rgba(184,159,159,0.75)"}}>
                <Grid item sm={6} sx={{}}>
                  <Box sx={{pt: 8 , height: "100%", display: "flex"}}>
                    <Box sx={{backgroundColor: "blue", width: "16px", mr: 2}}>
                    </Box>
                    <Typography variant="h4" sx={{fontWeight: "bold"}}>
                      Banking Terminal Software Development and Support
                    </Typography>
                  </Box>

                  <Box sx={{p: 4}}>

                    <Typography variant="h6">
                    Developed terminal software closely with international clients. Provided crucial support for the team, bug fixes and package releases delivered in a short time.
                    </Typography>
                  </Box>

                  
                </Grid>
                <Grid item sm={6}>
                  <Box sx={{position: "relative", height: "100%", width: "100%", minHeight: "300px"}}>
                        <Image
                          src="/assets/cub.png"
                          fill
                          style={{objectFit:"contain"}}
                          alt="Picture"
                        />
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6}>


                                  
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <Box sx={{p: 4, pt: 0}}>
                        <Box>
                          <Box sx={{display: "flex", justifyContent: "space-between"}}>
                            <Typography variant="h6">
                              1. CUB Taiwan
                            </Typography>
                            <Typography variant="h6" sx={{ fontWeight: 400, color: "gray", fontStyle: "italic"}}>
                              2019
                            </Typography>
                          </Box>
                          <Typography variant="h6" sx={{ fontWeight: 400}}>
                            Develop Terminal Software, Support, Deploy
                          </Typography>
                      </Box>
                   
                      <Box>
                        <Box sx={{display: "flex", justifyContent: "space-between"}}>
                          <Typography variant="h6">
                            2. CUB Cambodia
                          </Typography>
                          <Typography variant="h6" sx={{ fontWeight: 400, color: "gray", fontStyle: "italic"}}>
                            2020
                          </Typography>
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 400}}>
                          Develop Terminal Software, Support, Deploy
                        </Typography>
                    </Box>

                    <Box>
                        <Box sx={{display: "flex", justifyContent: "space-between"}}>
                          <Typography variant="h6">
                            3. Genting
                          </Typography>
                          <Typography variant="h6" sx={{ fontWeight: 400, color: "gray", fontStyle: "italic"}}>
                            2023
                          </Typography>
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 400}}>
                          Software Testing
                        </Typography>
                    </Box>
                    </Box>
                   
              </Collapse>
                </Grid>
                <Grid item xs={12} sm={6}>

                </Grid>

              </Grid>


            </CardActionArea>
         
          </Grid>
        </Grid>

    </Box>
  )
}


export default appWithTranslation(App)