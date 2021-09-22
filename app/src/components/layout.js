import styles from "../styles/Home.module.css";
import React from "react";
import {createTheme, MuiThemeProvider} from '@material-ui/core/styles';
import Footer from "./footer";
import Typography from "@material-ui/core/Typography";
import {Link} from 'react-router-dom';
import Button from "@material-ui/core/Button";

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
                        <>
                            <Link to={'/view'}>
                                <Button style={{marginTop:'2%', marginLeft:'3%'}} variant={"outlined"}>
                                    View Proposals
                                </Button>
                            </Link>
                            <Typography component="h1" variant={"h1"} style={{textAlign:'center', marginTop: 10,
                                marginBottom: 50, fontFamily: 'Rubik',fontWeight: 400, color: '#1F75A6'}}>
                                Influence<span style={{color: '#A64B28'}}>Me</span>
                            </Typography>
                        </>
                    ) }
                    {pageOption === 1 && (
                        <Typography component="h1" variant={"h2"} style={{textAlign:'left',fontFamily: 'Rubik',
                            fontWeight: 800, marginBottom: 40,color: '#1F75A6', margin:20, marginLeft: '8%'}}>
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