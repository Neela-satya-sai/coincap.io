import { useEffect, useState } from 'react'
import Banner from "./components/Banner/Banner.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import  Cryptotable from "./components/Cryptotable/Cryptotable.jsx";
import  {makeApiCall} from "./api/api.jsx";

function App() {
  const [cryptoData, setCryptoData] = useState([]);

  // const cryptoData = [
  //   { rank: 1, name: "Bitcoin", symbol: "BTC", price: "₹8,051,013.46", marketCap: "₹159.60t", volume: "₹595.08b", change: "0.20" },
  //   { rank: 2, name: "Ethereum", symbol: "ETH", price: "₹153,299.78", marketCap: "₹18.49t", volume: "₹410.61b", change: "-0.30" },
  //   { rank: 3, name: "Tether", symbol: "USDT", price: "₹85.45", marketCap: "₹12.58t", volume: "₹1.80t", change: "0.01" },
  //   { rank: 1, name: "Bitcoin", symbol: "BTC", price: "₹8,051,013.46", marketCap: "₹159.60t", volume: "₹595.08b", change: "0.20" },
  //   { rank: 2, name: "Ethereum", symbol: "ETH", price: "₹153,299.78", marketCap: "₹18.49t", volume: "₹410.61b", change: "-0.30" },
  //   { rank: 3, name: "Tether", symbol: "USDT", price: "₹85.45", marketCap: "₹12.58t", volume: "₹1.80t", change: "0.01" },
  //   { rank: 1, name: "Bitcoin", symbol: "BTC", price: "₹8,051,013.46", marketCap: "₹159.60t", volume: "₹595.08b", change: "0.20" },
  //   { rank: 2, name: "Ethereum", symbol: "ETH", price: "₹153,299.78", marketCap: "₹18.49t", volume: "₹410.61b", change: "-0.30" },
  //   { rank: 3, name: "Tether", symbol: "USDT", price: "₹85.45", marketCap: "₹12.58t", volume: "₹1.80t", change: "0.01" },
  //   { rank: 1, name: "Bitcoin", symbol: "BTC", price: "₹8,051,013.46", marketCap: "₹159.60t", volume: "₹595.08b", change: "0.20" },
  //   { rank: 2, name: "Ethereum", symbol: "ETH", price: "₹153,299.78", marketCap: "₹18.49t", volume: "₹410.61b", change: "-0.30" },
  //   { rank: 3, name: "Tether", symbol: "USDT", price: "₹85.45", marketCap: "₹12.58t", volume: "₹1.80t", change: "0.01" },
  //   { rank: 1, name: "Bitcoin", symbol: "BTC", price: "₹8,051,013.46", marketCap: "₹159.60t", volume: "₹595.08b", change: "0.20" },
  //   { rank: 2, name: "Ethereum", symbol: "ETH", price: "₹153,299.78", marketCap: "₹18.49t", volume: "₹410.61b", change: "-0.30" },
  //   { rank: 3, name: "Tether", symbol: "USDT", price: "₹85.45", marketCap: "₹12.58t", volume: "₹1.80t", change: "0.01" },
  //   { rank: 1, name: "Bitcoin", symbol: "BTC", price: "₹8,051,013.46", marketCap: "₹159.60t", volume: "₹595.08b", change: "0.20" },
  //   { rank: 2, name: "Ethereum", symbol: "ETH", price: "₹153,299.78", marketCap: "₹18.49t", volume: "₹410.61b", change: "-0.30" },
  //   { rank: 3, name: "Tether", symbol: "USDT", price: "₹85.45", marketCap: "₹12.58t", volume: "₹1.80t", change: "0.01" },
  //   { rank: 1, name: "Bitcoin", symbol: "BTC", price: "₹8,051,013.46", marketCap: "₹159.60t", volume: "₹595.08b", change: "0.20" },
  //   { rank: 2, name: "Ethereum", symbol: "ETH", price: "₹153,299.78", marketCap: "₹18.49t", volume: "₹410.61b", change: "-0.30" },
  //   { rank: 3, name: "Tether", symbol: "USDT", price: "₹85.45", marketCap: "₹12.58t", volume: "₹1.80t", change: "0.01" },
  // ];
   
  useEffect(()=>{
    async function fetchData() {
      const response = await makeApiCall();
      console.log("API Response:", response.data);
  
      if (Array.isArray(response.data.data)) {
        setCryptoData(response.data.data);
      } else {
        console.error("API did not return an array!", response);
        setCryptoData([]);
      }
    }
    fetchData();
  
  
    // let data = makeApiCall();
    // setCryptoData(data);
  },[]);
  

  return (
   
    <>
     {/* {console.log("rendered")} */}
      <Banner />
      <Navbar/>
      
      <Hero/>
      <Cryptotable data={cryptoData} />
     
   
    </>
  )
}

export default App;
