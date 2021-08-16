import React from 'react';
import {FaCcVisa,FaCcPaypal} from "react-icons/fa";


//Component
import MovieHero from '../components/MovieHero/MovieHero.component';
import Cast from '../components/Cast/Cast.component';
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
//Config
import TempPosters from "../config/TempPoster.config";

const Movie = () => {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow:2 ,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow:3,
              slidesToScroll: 1,
            },
          },
        ],
      };
    
    return (
        <>
       <MovieHero/>
       <div className="my-12 container px-4 lg:w-2/3 lg:ml-20 ">
          <div className="flex flex-col items-start gap-3">
          <h2 className="text-gray-800 font-bold text-2xl">About The Movie</h2>
           <p>
           Bruce Wayne and Diana Prince try to bring the metahumans of Earth together after the death of Clark Kent. Meanwhile,
           Darkseid sends Steppenwolf to Earth with an army to subjugate humans.
           </p>
          </div>
          <div className="my-8">
          <hr/>
          </div>
          <div className="my-8">
            <h2 className="text-gray-800 font-bold text-2xl mb-3">Applicable offers</h2>
           <div className="flex flex-col gap-3 lg:flex-row">
           <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-300 border-dashed border-2 rounded-md">
                <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full"/>
                </div>
                <div className="flex flex-col items-start">
                    <h3 className="text-gray-700 text-xl font-bold">Visa Stream Offer</h3>
                    <p className="text-gray-600">Get 50% off up to INR 150 on all RuPay cards* on BookMyShow Stream.</p>
                </div>
            </div>
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-300 border-dashed border-2 rounded-md">
                <div className="w-8 h-8">
                <FaCcPaypal className="w-full h-full"/>
                </div>
                <div className="flex flex-col items-start">
                    <h3 className="text-gray-700 text-xl font-bold">Filmy Pass</h3>
                    <p className="text-gray-600">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
                </div>
            </div>
           </div>
          </div>
           <div className="my-8">
           <div className="my-8">
          <hr/>
          </div>
           <h2 className="text-gray-800 font-bold text-2xl mb-4">Cast and Crew</h2>
          
           <div className="flex flex-wrap gap-4">
                <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/henry-cavill-23964-04-05-2020-04-25-14.jpg" 
                castName="Henry Cavil" 
                role="Superman"/>
                <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg" 
                castName="Gal gadot" 
                role="Wonder Woman"/>
                <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ben-affleck-292-12-09-2017-05-12-16.jpg" 
                castName="Ben Alffeck" 
                role="Batman"/>
                <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/jason-momoa-25617-24-03-2017-17-39-52.jpg" 
                castName="Jason Momoa" 
                role="Aquaman"/>
                <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ezra-miller-34889-24-03-2017-16-04-22.jpg" 
                castName="Ezra Miller" 
                role="Flash"/>

            </div>
           </div>
           <div className="my-8">
           <hr/>
         </div>
            <div className="my-8">
            <PosterSlider 
            config={settings}
            images={TempPosters} 
            title="You might Also like" 
            isDark={false}/>
            </div>
            <div className="my-8">
            <hr/>
            </div>
            <div className="my-8">
            <PosterSlider 
            config={settings}
            images={TempPosters} 
            title="BMX XCLUSIV" 
            isDark={false}/>
            </div>
       </div>
        </>
    )
};

export default Movie;
