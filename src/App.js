import './App.css';
import TvShowCard from './components/TvShowCard';
import { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function App() {
  const [tvShows, setTVShows] = useState([]);
  useEffect(() => {
    const fetchTVShows = async ()=>{
      let apiURL = "https://api.sheety.co/181c88106ded509548abd7648ffff8fb/myTvPicks/sheet1"
      const response = await fetch(apiURL);
      const data = await response.json();
      setTVShows(data.sheet1);
    };
    fetchTVShows();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="App">
      <div className="Logo">
        <img src="/logo.ico" alt="myTVPicks"/>
      </div>
      <div>
        <Slider {...settings}>      
      {tvShows.map((show) => (
        <TvShowCard show = {show}/>
      ))} 
      </Slider>
      </div>
    </div>
  );
}

export default App;
