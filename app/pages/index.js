import Image from 'next/image'
import Grid from '@material-ui/core/Grid';
import Login from '../components/login'
import Layout from "../components/layout";

export default function Home() {
  return (
      <Layout pageOption={0}>
          <Grid container spacing={0}>
              <Grid item xs>
                  <Image src={'/../public/images/home_photo.png'} alt={"A picture of a deal that was made between two persons"} width={300} height={300}/>
              </Grid>
              <Grid item xs>
                  <Login/>
              </Grid>
          </Grid>
      </Layout>
  )
}
