import Grid from '@material-ui/core/Grid';
import Login from '../components/login'
import Layout from "../components/layout";
import '../styles/globals.css';
import pic from '../images/home_photo.png'
import React, {useEffect} from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

function App() {
  useEffect(()=>{
    Aos.init({duration: 1500})
  },[])

  return (
    <Layout pageOption={0}>
      <Grid container spacing={0}>
        <Grid item xl style={{fontSize: '1.5em', color: '#696969'}}>
          <p data-aos={'fade-up'}>
            In our new digital world, marketing is not only based on using commercials or billboards but it is realized
            through social media influencers as well. Nowadays, social media influencers have an ongoing growing effect
            on users' minds and opinions. This effect is widely used in marketing and advertising. But how to find those
            influencers?<br/><br/>
          </p>
          <img width={'100%'} data-aos={'flip-right'}
               src={'https://www.myhoardings.com/blog/wp-content/uploads/2021/01/Influencer-Marketing-1-1024x512.png'}
               alt={'Influencer attracting people'}/>
          <p data-aos={'fade-up'}>
            Nowadays, it is not difficult to become a well-known persona in the digital world. Many people make living
            out of it or at least use it as another source of income. They make this money promoting marketing networks
            and their products. But how to attract them for collaboration?<br/><br/>
          </p>
          <img width={'100%'} data-aos={'flip-right'}
               src={'https://snap.je/wp-content/uploads/2020/08/influencer-marketing-featured-img.jpg'} alt={'influencer'}/>
          <p data-aos={'fade-up'}>
            InfluenceMe is the answer you are looking for!<br/>
            Here businesses can create collaboration proposals for all users while influencers can send a collaboration
            request for the proposals they find relevant. By using this platform, the companies will be exposed to the
            registered influencers, and vice versa.<br/><br/>
          </p>
          <p data-aos={'fade-up'}>
            What are you waiting for?<br/>
            Sign in and start collaborating!<br/>
          </p>
        </Grid>
        <Grid item xs={6} style={{marginTop: '5%', overflow:"hidden", height: 350}} data-aos={'fade-right'}>
          <img src={pic} alt={"A deal is made between two persons"} width={300} height={300}/>
        </Grid>
        <Grid id="signIn" item xs={6} style={{marginTop: '5%', overflow:'hidden', height:350}} data-aos={'fade-left'}>
          <Login/>
        </Grid>
        <Grid data-aos={'fade-up'} item xs={12} style={{fontSize: '1.5em', color: '#696969', marginBottom: '5%'}}>
          <p>
            Not sure if you want to make an account yet?<br/>
            Do you want to see what this site has to offer?<br/>
            Take a look of the current proposals some marketing networks have already posted in InfluenceMe.
          </p>
          <div style={{width: '100%', display: "flex", justifyContent: "center", marginTop: '2%'}}>
            <Link to={'/view'}>
              <Button variant={"outlined"}>
                View Proposals
              </Button>
            </Link>
          </div>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default App;
