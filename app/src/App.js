import Grid from '@material-ui/core/Grid';
import Login from './components/login'
import Layout from "./components/layout";
import './styles/globals.css';
import pic from './images/home_photo.png'

function App() {
  return (
    <Layout pageOption={0}>
      <Grid container spacing={0}>
        <Grid item xs>
          <img src={pic} alt={"A deal is made between two persons"} width={300} height={300}/>
        </Grid>
        <Grid item xs>
          <Login/>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default App;
