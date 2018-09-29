import Layout from '../components/Layout';
import Prices from '../components/Prices'; 

import fetch from 'isomorphic-unfetch';

const Home = (props) => (
  <Layout>
    <h2>Welcome to BitzPrice</h2>
    <Prices data={props.bpi}/>
  </Layout>
);

Home.getInitialProps = async function() {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");

  const data = await res.json();

  return {
    bpi: data
  }
}

export default Home;