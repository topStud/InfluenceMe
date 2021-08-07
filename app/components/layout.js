import Head from 'next/head'
import styles from "../styles/Home.module.css";
import React from "react";
export const siteTitle = 'InfluenceMe'
import {createTheme, MuiThemeProvider} from '@material-ui/core/styles';
import Footer from "./footer";
import Typography from "@material-ui/core/Typography";
import Link from 'next/link'

const theme = createTheme({
    palette: {
        primary: {
            main: '#A68617'
        },
        secondary: {
            main: '#1F75A6'
        }
    }
});

export default function Layout({ children, pageOption }) {
    return (
        <MuiThemeProvider theme={theme}>
            <div className={styles.container}>
                <Head>
                    <meta name="description" content="Website for connecting influencers and companies" />
                    <link rel="icon" type="image/png" sizes="32" href="https://img.icons8.com/ios-glyphs/480/handshake.png"/>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                    <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@317;417&display=swap" rel="stylesheet"/>
                    <title>{siteTitle}</title>
                </Head>

                <header style={{width: '100%'}}>
                    {!pageOption && (
                        <Typography component="h1" variant={"h1"} style={{textAlign:'center', marginTop: 80, marginBottom: 50, fontFamily: 'Rubik',fontWeight: 400, color: '#1F75A6'}}>
                            Influence<span style={{color: '#A64B28'}}>Me</span>
                        </Typography>
                    ) }
                    {pageOption === 1 && (
                        <Typography component="h1" variant={"h2"} style={{textAlign:'left', marginBottom: 30, fontFamily: 'Rubik',fontWeight: 400, color: '#1F75A6'}}>
                            <Link href={'/'}>
                                <a>
                                    Influence<span style={{color: '#A64B28'}}>Me</span>
                                </a>
                            </Link>
                        </Typography>
                    )}
                </header>
                <main className={styles.main}>{children}</main>
                <Footer/>
            </div>
        </MuiThemeProvider>
    )
}