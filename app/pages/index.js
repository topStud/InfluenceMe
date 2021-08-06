import Head from 'next/head'
import Image from 'next/image'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styles from '../styles/Home.module.css'
import Login from '../components/login'
import Link from 'next/link'
import {createTheme, MuiThemeProvider} from '@material-ui/core/styles';

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

export default function Home() {
  return (
    <MuiThemeProvider theme={theme}>
        <div className={styles.container}>
            <Head>
                <title>InfluenceMe</title>
                <meta name="description" content="Website for connecting influencers and companies" />
                <link rel="icon" type="image/png" sizes="32" href="https://img.icons8.com/ios-glyphs/480/handshake.png"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@317;417&display=swap" rel="stylesheet"/>
            </Head>

            <main className={styles.main}>
                <Typography component="h1" variant={"h1"} style={{marginBottom: 80, fontFamily: 'Rubik',fontWeight: 400, color: '#1F75A6'}}>
                    Influence<span style={{color: '#A64B28'}}>Me</span>
                </Typography>
                <Grid container spacing={0}>
                    <Grid item xs>
                        <Image src={'/../public/images/home_photo.png'} alt={"A picture of a deal that was made between two persons"} width={300} height={300}/>
                    </Grid>
                    <Grid item xs>
                        <Login/>
                    </Grid>
                </Grid>
            </main>

            <footer className={styles.footer}>
                <Link href={'/'}>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        &copy;{' ' + new Date().getFullYear() + '   '}InfluenceMe
                        <span className={styles.logo}>
            <img src="https://img.icons8.com/ios-glyphs/480/handshake.png" alt="InfluenceMe Logo" width={24} height={24} />
          </span>
                    </a>
                </Link>
            </footer>
        </div>
    </MuiThemeProvider>
  )
}
