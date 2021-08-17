import React,{useEffect,useState} from "react";
import HeroSlider from "react-slick";
import axios from "axios";

const HeroCarousal = () => {
  const[images,setImages]=useState([]);

  useEffect(()=>{
    const requestNowPlayingMovies=async()=>{
      const getImages=await axios.get("/movie/now_playing");
      setImages(getImages.data.results);
    };
    requestNowPlayingMovies();
  },[]);

    const settingsLG={
    arrows:true,
    autoplay:true,
    centerMode:true,
    centerPadding:"300px",
    slidesToShow:1,
    infinite: true,
    slidesToScroll: 1
    };


    const settings = {
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    
return <>
  <div className="lg:hidden">
  <HeroSlider {...settings}>
{images.map((image) => (
    <div className="w-full h-56 md:h-80 py-3 px-1"><img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="Testing" className="w-full h-full rounded-md"/></div>
))}
</HeroSlider>
  </div>
  <div className="hidden lg:block">
  <HeroSlider {...settingsLG}>
{images.map((image) => (
    <div className="w-full h-96 px-2 py-3"><img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="Testing" className="w-full h-full rounded-md"/></div>
))}
</HeroSlider>
  </div>
</>;
};

export default HeroCarousal;