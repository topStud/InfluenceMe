import styles from "../styles/Home.module.css";
import React from "react";
import {createTheme, MuiThemeProvider} from '@material-ui/core/styles';
import Footer from "./footer";
import Typography from "@material-ui/core/Typography";
import {Link} from 'react-router-dom';

export const siteTitle = 'InfluenceMe'

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
                <header style={{width: '100%'}}>
                    {!pageOption && (
                        <Typography component="h1" variant={"h1"} style={{textAlign:'center', marginTop: 50, marginBottom: 50, fontFamily: 'Rubik',fontWeight: 400, color: '#1F75A6'}}>
                            Influence<span style={{color: '#A64B28'}}>Me</span>
                        </Typography>
                    ) }
                    {pageOption === 1 && (
                        <Typography component="h1" variant={"h2"} style={{textAlign:'left', marginBottom: 30, fontFamily: 'Rubik',fontWeight: 400, color: '#1F75A6'}}>
                            <Link to={'/'}>
                               Influence<span style={{color: '#A64B28'}}>Me</span>
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