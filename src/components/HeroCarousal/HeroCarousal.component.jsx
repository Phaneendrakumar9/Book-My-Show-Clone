import React from "react";
import HeroSlider from "react-slick";

const HeroCarousal = () => {

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

    const images = ["https://images.unsplash.com/photo-1628778108054-0e2e25cf39bd?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
                    "https://images.unsplash.com/photo-1622495505972-52e7630d7077?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
                    "https://images.unsplash.com/photo-1628710911780-dff22a382bdd?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
                    "https://images.unsplash.com/photo-1628542197835-d66a400ad71f?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
                    "https://images.unsplash.com/photo-1628542197835-d66a400ad71f?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"]
return <>
  <div className="lg:hidden">
  <HeroSlider {...settings}>
{images.map((image) => (
    <div className="w-full h-56 md:h-80 py-3 px-1"><img src={image} alt="Testing" className="w-full h-full rounded-md"/></div>
))}
</HeroSlider>
  </div>
  <div className="hidden lg:block">
  <HeroSlider {...settingsLG}>
{images.map((image) => (
    <div className="w-full h-96 px-2 py-3"><img src={image} alt="Testing" className="w-full h-full rounded-md"/></div>
))}
</HeroSlider>
  </div>
</>;
};

export default HeroCarousal;