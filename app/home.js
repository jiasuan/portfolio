'use client';
import { Fragment, useEffect, useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import Image from "next/image";
import styles from "./page.module.css";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { appWithTranslation } from 'next-i18next'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { AppBar, CardActionArea } from '@mui/material';
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

const ENGLISH = 'en';
const CHINESE = 'ch';

const translationsData = {
    'en': {
        "intro.title": "Hello, I'm Louis Tan Jia Suan",
        "intro.joke": "My arm is strong, my friends call me Louis Armstrong..",
        "intro.subTitle" : "Frontend developer based in Kuala Lumpur, Malaysia.",
        "project.title": "My Exciting Projects",
        "project.subTitle": "Over the past few years, I've had the opportunity to work on various projects in the banking terminal software industry, along with amazing people!",
        "project.title.cub": "ATM Terminal Software",
        "project.description.cub": "Developed ATM Terminal Software, provided customer support, and handled package delivery in all phases.",
        "project.title.genting": "Software Testing",
        "project.description.genting": "Performed testing on software, Terminal Agent, Microservices, Server Request, and Terminal machine integration, and released packages.",
        "project.title.ocbc": "OCBC Singapore",
        "project.description.ocbc": "Developed new transaction (Money Lock) on existing ATM software.",
        "project.title.buildTool": "Automated Build Package Tool",
        "project.description.buildTool": "Developed an automated build tool for releasing version packages into different phases and versions.",
        "project.title.reportTool": "Report Generation Tool",
        "project.description.reportTool": "Developed a report generation tool to generate different kinds of reports in preset formats.",
        "project.title.cubc": "ATM Terminal Software",
        "project.description.cubc": "Developed new transactions and fixes on ATM software, provided customer support, and handled package delivery.",
        "project.title.interx": "Banking Terminal Advertisement Solution",
        "project.description.interx": "Developed end-to-end personalized advertisement software for bank terminals, an admin dashboard to CRUD (Create, Read, Update, Delete) advertisement content, rules, and deployment.",
        "project.title.sdms": "Software Distribution Management System",
        "project.description.sdms": "Developed an admin dashboard for bank users to retrieve terminal logs, distribute software to selected terminals, and more.",
        "project.title.myesg": "ESG Disclosure Platform for SMEs",
        "project.description.myesg": "Developed an ESG platform that empowers organizations to enhance and disclose their environmental, social, and governance practices and performance.",
    },
    'ch': {
        "intro.title": "你好，我是陈嘉轩",
        "intro.joke": "",
        "intro.subTitle" : "是位在马来西亚吉隆坡的前端工程师。",
        "project.title": "我做过的项目",
        "project.subTitle": "在过去的几年里，，我有机会与出色的人一起参与银行终端软件行业的各种项目！",
        "project.title.cub": "ATM终端软件",
        "project.description.cub": "开发了ATM终端软件，并在所有阶段（SIT, UAT, PROD）处提供客户支持。",
        "project.title.genting": "软件测试",
        "project.description.genting": "对软件、终端代理、微服务、服务器请求和终端机整合进行测试，并提供发布包。",
        "project.title.ocbc": "新加坡华侨银行 (OCBC)",
        "project.description.ocbc": "在现有的ATM软件上开发了新的交易（Money Lock）。",
        "project.title.buildTool": "自动化构建包工具",
        "project.description.buildTool": "开发了一个自动化构建工具，用于将版本包发布到不同的阶段和版本。",
        "project.title.reportTool": "报告生成工具",
        "project.description.reportTool": "开发了一个报告生成工具，可以生成预设格式的各种报告。",
        "project.title.cubc": "ATM终端软件",
        "project.description.cubc": "在ATM软件上开发了新的交易和BUG修复，提供客户支持，并处理发布包。",
        "project.title.interx": "银行终端广告解决方案",
        "project.description.interx": "为银行终端开发了个性化广告软件，管理员仪表板用于创建、读取、更新、删除广告内容、规则和部署。",
        "project.title.sdms": "软件分发管理系统",
        "project.description.sdms": "为银行用户开发了管理员仪表板，用于检索终端日志、向选定的终端分发软件等。",
        "project.title.myesg": "ESG生态管理系统",
        "project.description.myesg": "开发了一个ESG平台，协助企业收集、管理和分析数据、评估绩效、识别风险，并提供决策支持，推动可持续发展的实现。"
    }
}


function Home(){

  return(
      <Portfolio/>
  )
}

function Portfolio() {

  const { t, ready } = useTranslation()

  const [lang, setLang] = useState(ENGLISH);
  const handleChangeLang = (val) => {
    setLang(val)
  }

  return (
    <main>
      <Box sx={{backgroundColor: "white"}}>
        <Header lang={lang} handleChangeLang={handleChangeLang}/>
        <Box sx={{height: '100%', background: "#F9FBF2"}}>
          <Section_Home lang={lang}/>
        </Box>
      
        <Box sx={{minHeight: '100vh'}}>
          <Section_Projects lang={lang}/>
        </Box>

      </Box>

    </main>
  );
}


function Header(props){

    const { lang, handleChangeLang } = props;

    return(
        <AppBar sx={{ backgroundColor: "transparent", boxShadow: "none", color: "black"}}>
            <Box sx={{display: "flex", justifyContent: "end"}}>
            <Button size="large" variant="text" sx={{ color: "black", textDecoration: lang === ENGLISH ? "underline" : "none"}} onClick={()=>handleChangeLang(ENGLISH)}>ENG</Button>
            <Button size="large" variant="text" sx={{ color: "black", textDecoration: lang === CHINESE ? "underline" : "none"}} onClick={()=>handleChangeLang(CHINESE)}>中文</Button>
            </Box>
        </AppBar>
    )
}


function Section_Home(props){

    const { lang } = props;

  return(
    <Fragment>
      <Box sx={{textAlign: "center", py: 10}}>
          <Typography variant="h1" sx={{fontWeight: "bold", pb: 2}}>
            {translationsData?.[lang]?.["intro.title"]}
          </Typography>
          <Typography variant="subtitle1" sx={{fontStyle: "italic"}}>
            {translationsData?.[lang]?.["intro.joke"]}
          </Typography>
          <Typography variant="h4" sx={{fontWeight: "bold"}}>
            {translationsData?.[lang]?.["intro.subTitle"]}
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


function Section_Projects(props){

    const { lang } = props;

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
      id: "2",
      name: "Genting",
      title: translationsData[lang]["project.title.genting"],
      description: translationsData[lang]["project.description.genting"],
      date: "2019",
      logo: "/assets/genting.png"
    },
    {
      id: "3",
      name: "OCBC Singapore",
      title: translationsData[lang]["project.title.ocbc"],
      description: translationsData[lang]["project.description.ocbc"],
      date: "2019",
      logo: "/assets/ocbc.png"
    },
    {
      id: "7",
      name: "InterX",
      title: translationsData[lang]["project.title.interx"],
      description: translationsData[lang]["project.description.interx"],
      date: "2019",
      logo: "/assets/interx.png"
    },
    {
      id: "8",
      name: "SDMS",
      title: translationsData[lang]["project.title.sdms"],
      description: translationsData[lang]["project.description.sdms"],
      date: "2019",
      logo: "/assets/sdms.png"
    },
    {
      id: "9",
      name: "myESG",
      title: translationsData[lang]["project.title.myesg"],
      description: translationsData[lang]["project.description.myesg"],
      date: "2019",
      logo: "/assets/myesg.png"
    },
    {
        id: "1",
        name: "CUB",
        title: translationsData[lang]["project.title.cub"],
        description: translationsData[lang]["project.description.cub"],
        date: "2019",
        logo: "/assets/cub.png"
    },
    {
        id: "6",
        name: "CUBC",
        title: translationsData[lang]["project.title.cubc"],
        description: translationsData[lang]["project.description.cubc"],
        date: "2019",
        logo: "/assets/cubc.svg"
    },
    {
        id: "4",
        name: "NCR Malaysia",
        title: translationsData[lang]["project.title.buildTool"],
        description: translationsData[lang]["project.description.buildTool"],
        date: "2019",
        logo: "/assets/ncr.png"
      },
      {
        id: "5",
        name: "NCR Malaysia",
        title: translationsData[lang]["project.title.reportTool"],
        description: translationsData[lang]["project.description.reportTool"],
        date: "2019",
        logo: "/assets/ncr.png"
      },
  ];
  


  return(
    <Fragment >
      <Box sx={{background: "#FFEDE1"}}>
        <Box sx={{textAlign: "center", p: "10% 20%"}}>
          <Typography variant="h4" sx={{fontWeight: "bold"}}>
            {translationsData[lang]["project.title"]}
          </Typography>
          <Typography variant="h5">
            {translationsData[lang]["project.subTitle"]}
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
                      <Typography variant='h6' fontWeight={"400"}>
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


export default Home;

export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, [
          'common',
        ])),
        // Will be passed to the page component as props
      },
    }
  }